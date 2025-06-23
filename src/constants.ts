import { version } from '../package.json';
import type { Link, RepoReference, SocialLink } from "./data/types";
import ghIcon from './assets/logos/gh.svg'
import linkedInIcon from './assets/logos/linkedin.svg';

export const TITLE: string = 'Jkutkut';

export const REPO_LINK: Link = {
    text: `v${version}`,
    url: 'https://jkutkut.com/portfolio'
};

export const SOCIAL_LINKS: SocialLink[] = [
    { text: 'GitHub', url: 'https://github.com/jkutkut', icon: ghIcon },
    { text: 'LinkedIn', url: 'https://linkedin.com/in/jkutkut', icon: linkedInIcon },
];

// External data:
export const repos: RepoReference[] = [
  {
    type: 'github',
    usr: 'jkutkut', repoName: 'osmia',
    highlights: [
    ],
    links: [
      {
        type: 'docs',
        url: 'https://jkutkut.github.io/osmia/osmia/index.html',
        text: 'Docs',
      }
    ]
  },
  {
    type: 'github',
    usr: 'jkutkut', repoName: 'osmia-cli',
  },
  {
    type: 'github',
    usr: 'jkutkut', repoName: 'osmia-npm',
  },
  {
    type: 'github',
    usr: 'jkutkut', repoName: 'osmia-vscode',
  },
];
