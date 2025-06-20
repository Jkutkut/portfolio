import type { RepoData, RepoReference } from './types';

export const fetchRepository = async (repo: RepoReference): Promise<RepoData | null> => {
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
    const description = repo.description ?? data.description;
    const highlights = repo.highlights ?? [];
    const tags = data.topics ?? [];
    const links = repo.links ?? [];
    return {
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
