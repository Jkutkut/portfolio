export interface Links { // TODO use this interface across all code
  type?: 'docs';
  url: string;
  text: string;
}

export interface RepoReference {
  type: 'github';
  usr: string;
  repoName: string;

  // Independent from the repo
  highlights?: string[];
  description?: string;
  links?: Links[];
}

export type RepoData = { // TODO use astro content type
  name: string;
  full_name: string;
  url: string;
  description: string;
  highlights: string[];
  tags: string[];
  links: Links[];
};
