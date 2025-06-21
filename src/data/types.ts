export interface Link {
  type?: 'docs';
  url: string;
  text: string;
}

export enum LinkTarget {
  Self = '_self',
  Blank = '_blank',
}

export interface RepoReference {
  type: 'github';
  usr: string;
  repoName: string;

  // Independent from the repo
  highlights?: string[];
  description?: string;
  links?: Link[];
}

export type RepoData = { // TODO use astro content type
  name: string;
  full_name: string;
  url: string;
  description: string;
  highlights: string[];
  tags: string[];
  links: Link[];
};
