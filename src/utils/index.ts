import type { RepoReference } from "../types";

export const str2slug = (str: string): string => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '')
    .replace(/^-+|-+$/g, '');
}

export const repoMerger = (repos: RepoReference[][]): RepoReference[] => {
  const repoMap: Record<string, RepoReference> = {};
  for (const repoList of repos) {
    for (const repo of repoList) {
      const key = `${repo.type}-${repo.usr}-${repo.repoName}`;
      const repoInMap = repoMap[key];
      if (!repoInMap) {
        repoMap[key] = repo;
        continue;
      }
      console.debug(`Duplicate repo found: ${key}`);
      repoInMap.highlights ??= [];
      if (repo.highlights && repo.highlights.length > 0) {
        repo.highlights.forEach(highlight => {
          if (!repoInMap.highlights!.includes(highlight)) {
            repoInMap.highlights!.push(highlight);
          }
        });
      }
      repoInMap.links ??= [];
      if (repo.links) {
        repo.links.forEach(link => {
          if (!repoInMap.links!.some(existingLink => existingLink.url === link.url)) {
            repoInMap.links!.push(link);
          }
        });
      }
      console.warn(`Repo merged:`, key);
    }
  }
  return Object.values(repoMap);
}
