import fs from 'fs';
import path from 'path';
import { getReadme, getRepository } from './gh'
import { repos } from '@constants';
import { cacheHandler } from './cache';
import type { RepoData, RepoReference } from '../types';


const fetchReadmeAsDescription = async (repo: RepoReference): Promise<string | null> => {
    const readme = await getReadme(repo);
    if (!readme) {
        return null;
    }
    const paragraphs = readme.split('\n');
    let startIdx, i, endIdx;
    for (i = 0; i < paragraphs.length; i++) {
        const trimmed = paragraphs[i].trim();
        if (trimmed.length > 0 && !trimmed.startsWith('#')) {
            startIdx = i;
            break;
        }
    }
    if (startIdx === undefined) {
        console.warn(` - No valid content found in README for ${repo.usr}/${repo.repoName}`);
        return null;
    }
    for (endIdx = startIdx + 1; endIdx < paragraphs.length; endIdx++) {
        const trimmed = paragraphs[endIdx].trim();
        if (trimmed.length === 0 || trimmed.startsWith('#')) {
            break;
        }
    }
    const description = paragraphs.slice(startIdx, endIdx).join('\n').trim();
    console.info(` - Fetched description for ${repo.usr}/${repo.repoName}`);
    return description || null;
}


async function main() {
  const contentPath = path.resolve('data/repos');
  fs.mkdirSync(contentPath, { recursive: true });
  const callPath = path.resolve('data/raw-repos');
  fs.mkdirSync(callPath, { recursive: true });

  console.info('Fetching GitHub repository data...');
  console.info(" - Storage path:", contentPath);
  console.info("Repositories:");
  const { cachedFetch } = cacheHandler(contentPath);
  const { cachedFetch: tmpCachedFetch } = cacheHandler(callPath);
  await Promise.all(
    repos.map(async repo => {
      const filename = `${repo.usr}.${repo.repoName}.json`;
      const fetchRepo = async () => {
        const repoData = await tmpCachedFetch({
          filename: `raw.${filename}`,
          fetch: async () => getRepository(repo)
        });
        if (!repoData) {
          return null;
        }
        const readme = await tmpCachedFetch({
          filename: `raw.${repo.usr}.${repo.repoName}.readme.md`,
          fetch: async () => fetchReadmeAsDescription(repo),
          fromDisk: (data: string) => data,
          toDisk: (data: string) => data
        });
        if (!readme) {
          return null;
        }
        const description = repo.description ?? readme ?? repoData.description;
        const highlights = repo.highlights ?? [];
        const tags = repoData.topics ?? [];
        const links = repo.links ?? [];
        return {
          type: repo.type,
          name: repoData.name,
          description,
          highlights,
          tags: tags,
          full_name: repoData.full_name,
          url: repoData.html_url,
          links
        } as RepoData;
      };
      await cachedFetch({
        filename,
        fetch: fetchRepo
      });
    })
  );
  console.log('GitHub repo data fetched and saved successfully.');
}

main();
