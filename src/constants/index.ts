import { version } from '../../package.json';
import type { Link, RepoReference } from "../types";

export const TITLE: string = 'Jkutkut';

export const REPO_LINK: Link = {
    text: `v${version}`,
    url: 'https://jkutkut.com/portfolio'
};

// External data:
export const repos: RepoReference[] = [
  {
    type: 'github',
    usr: 'jkutkut', repoName: 'osmia',
    highlights: [
      'Test runner for Node.js',
      'Supports Mocha, Jest, and Vitest',
      'Built-in support for TypeScript',
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
