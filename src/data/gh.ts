import type { RepoReference } from '../types';

export const getReadme = async (repo: RepoReference) => {
    console.info(` - Fetching README for ${repo.usr}/${repo.repoName}`);
    const { usr, repoName } = repo;
    const headers = {};
    const response = await fetch(
        `https://api.github.com/repos/${usr}/${repoName}/readme`,
        { headers }
    );
    if (!response.ok) {
        console.warn(` - Failed to fetch README for ${usr}/${repoName}: HTTP ${response.status} ${response.statusText}`);
        return null;
    }
    const { content } = await response.json();
    if (!content) {
        console.warn(` - No content found in README for ${usr}/${repoName}`);
        return null;
    }
    return atob(content);
}

export const getRepository = async (repo: RepoReference) => {
    const { usr, repoName } = repo;
    if (!usr || !repoName) {
        console.warn(`Invalid repository identifier: ${usr}/${repoName}`);
        return null;
    }
    console.info(` - Fetching repository data for ${usr}/${repoName}`);
    const headers = {
        Accept: 'application/vnd.github.mercy-preview+json', // needed to get "topics"
    };
    const response = await fetch(
        `https://api.github.com/repos/${usr}/${repoName}`,
        { headers }
    );
    if (!response.ok) {
        console.warn(`Failed to fetch ${usr}/${repoName}: HTTP ${response.status} ${response.statusText}`);
        return null;
    }
    const data = await response.json();
    return data;
}
