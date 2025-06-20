import type { RepoReference } from "./data/types";

export const TITLE: string = 'Jkutkut';

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
