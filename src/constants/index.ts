import { version } from '../../package.json';
import type { Link, RepoReference } from "../types";
import { repoMerger } from '../utils';
import categories from './categories';

export const TITLE: string = 'Jkutkut';
export const SEO_DESCRIPTION: string = 'Portfolio of Jorge Re, Jkutkut. A backend developer with passion for software development.';
export const REPO_LINK: Link = {
    text: `v${version}`,
    url: 'https://jkutkut.com/portfolio'
};

// External data:
export const highlights: RepoReference[] = [
  {
    type: 'github',
    usr: 'jkutkut', repoName: 'osmia',
  },
  {
    type: 'github',
    usr: 'jkutkut', repoName: 'osmia-vscode',
  },
  {
    type: 'github',
    usr: "ReGonzalezTeam", repoName: "InfoReflect"
  },
  {
    type: 'github',
    usr: 'jkutkut', repoName: 'EatUp',
  }
];

export const repos: RepoReference[] = repoMerger([
    highlights,
    categories.map(category => category.repos).flat()
]);

export const repoUsers: string[] = repos.flat()
    .map(repo => repo.usr)
    .filter((value, index, self) => self.indexOf(value) === index);
