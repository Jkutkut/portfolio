export interface Link {
  url: string;
  text: string;
}

export type SocialLink = Link & { icon: ImageMetadata };

export enum LinkTarget {
  Self = '_self',
  Blank = '_blank',
}

export type LinkSection = {
    name: string;
    links: Link[];
};

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
  type: 'github';
  name: string;
  full_name: string;
  url: string;
  description: string;
  highlights: string[];
  tags: string[];
  links: Link[];
};
