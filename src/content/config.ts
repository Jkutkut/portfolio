import { highlights } from '../constants';
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import fs from 'fs';
import type { RepoReference } from '../types';
import categories from '../constants/categories';

const loadFromRepoReference = (repo: RepoReference) => {
  const filename = `./data/repos/${repo.usr}.${repo.repoName}.json`;
  if (!fs.existsSync(filename)) {
    return null;
  }
  const data = fs.readFileSync(filename, { encoding: 'utf-8' });
  return {
    id: `${repo.usr}/${repo.repoName}`,
    ...JSON.parse(data)
  } as { id: string, data: RepoReference };
};

const repoSchema = z.object({
  type: z.enum(['github']),
  name: z.string(),
  full_name: z.string(),
  url: z.string(),
  description: z.string(),
  highlights: z.array(z.string()).optional(),
  tags: z.array(z.string()),
  links: z.array(z.object({
    type: z.enum(['docs']).optional(),
    url: z.string(),
    text: z.string(),
  }))
});

const highlightsCollection = defineCollection({
  loader: async () => {
    const data = await Promise.all(highlights.map(loadFromRepoReference));
    return data.filter(Boolean) as { id: string, data: RepoReference }[];
  },
  schema: repoSchema
});

const categoriesCollection = defineCollection({
  loader: async () => {
    const data = await Promise.all(categories.map(async category => {
      const repos = await Promise.all(category.repos.map(loadFromRepoReference));
      return {
        ...category,
        id: category.title,
        repos: repos.filter(Boolean)
      };
    }));
    return data;
  },
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    repos: z.array(repoSchema)
  })
})

const repos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './data/repos' }),
  schema: repoSchema,
});

export const collections = {
  repos,
  highlights: highlightsCollection,
  categories: categoriesCollection
};
