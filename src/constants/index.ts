import { version } from '../../package.json';
import type { Link, RepoReference } from "../types";
import categories from './categories';

export const TITLE: string = 'Jkutkut';

export const REPO_LINK: Link = {
    text: `v${version}`,
    url: 'https://jkutkut.com/portfolio'
};

// External data:
export const highlights: RepoReference[] = [
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
  {
    type: 'github',
    usr: 'jkutkutOrg', repoName: 'EatUp',
  }
];

export const repos: RepoReference[] = [
    highlights,
    categories.map(category => category.repos).flat()
].flat(); // TODO remove duplicates

export const repoUsers: string[] = repos.flat()
    .map(repo => repo.usr)
    .filter((value, index, self) => self.indexOf(value) === index);
