import type { RepoData, RepoReference } from '../types';

const fetchReadmeDescriptionOr = async (repo: RepoReference, defaultDescription: string): Promise<string> => {
    console.info(` - Fetching README for ${repo.usr}/${repo.repoName}`);
    const { usr, repoName } = repo;
    const headers = {};
    const response = await fetch(
        `https://api.github.com/repos/${usr}/${repoName}/readme`,
        { headers }
    );
    if (!response.ok) {
        console.warn(` - Failed to fetch README for ${usr}/${repoName}`);
        return defaultDescription;
    }
    const { content } = await response.json();
    if (!content) {
        console.warn(` - No content found in README for ${usr}/${repoName}`);
        return defaultDescription;
    }
    const decodedContent = atob(content);
    const paragraphs = decodedContent.split('\n');
    let startIdx, i, endIdx;
    for (i = 0; i < paragraphs.length; i++) {
        const trimmed = paragraphs[i].trim();
        if (trimmed.length > 0 && !trimmed.startsWith('#')) {
            startIdx = i;
            break;
        }
    }
    if (startIdx === undefined) {
        console.warn(` - No valid content found in README for ${usr}/${repoName}`);
        return defaultDescription;
    }
    for (endIdx = startIdx + 1; endIdx < paragraphs.length; endIdx++) {
        const trimmed = paragraphs[endIdx].trim();
        if (trimmed.length === 0 || trimmed.startsWith('#')) {
            break;
        }
    }
    const description = paragraphs.slice(startIdx, endIdx).join(' ').trim();
    console.info(` - Fetched description for ${usr}/${repoName}`);
    return description || defaultDescription;
}

export const fetchRepository = async (repo: RepoReference): Promise<RepoData | null> => {
    console.info(` - Fetching repository data for ${repo.usr}/${repo.repoName}`);
    const { usr, repoName } = repo;
    if (!usr || !repoName) {
        console.warn(`Invalid repository identifier: ${usr}/${repoName}`);
        return null;
    }
    const headers = {
        Accept: 'application/vnd.github.mercy-preview+json', // needed to get "topics"
    };
    const response = await fetch(
        `https://api.github.com/repos/${usr}/${repoName}`,
        { headers }
    );
    if (!response.ok) {
        console.warn(`Failed to fetch ${usr}/${repoName}`);
        return null;
    }
    const data = await response.json();
    const description = repo.description ?? await fetchReadmeDescriptionOr(repo, data.description);
    const highlights = repo.highlights ?? [];
    const tags = data.topics ?? [];
    const links = repo.links ?? [];
    return {
        type: repo.type,
        name: data.name,
        description,
        highlights,
        tags: tags,
        full_name: data.full_name,
        url: data.html_url,
        links
    } as RepoData;
}

export async function fetchRepositories(repos: RepoReference[]): Promise<RepoData[]> {
    const allData = await Promise.all(
        repos.map(fetchRepository)
    );
    return allData.filter(Boolean) as RepoData[];
}
