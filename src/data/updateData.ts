import fs from 'fs';
import path from 'path';
import { fetchRepository } from './gh'
import { repos } from '@constants';

async function main() {
  const contentPath = path.resolve('data/repos');
  fs.mkdirSync(contentPath, { recursive: true });

  console.info('Fetching GitHub repository data...');
  console.info(" - Storage path:", contentPath);
  console.info("Repositories:");
  await Promise.all(
    repos.map(async repo => {
      const data = await fetchRepository(repo);
      if (!data) return;
      const filename = `${repo.usr}.${repo.repoName}.json`;
      const filePath = path.join(contentPath, filename);
      console.info(` - ${repo.type} ${data.full_name} -> ${filename}`);
      fs.writeFileSync(
        filePath,
        JSON.stringify(data, null, 2)
      );
    })
  );
  console.log('GitHub repo data fetched and saved successfully.');
}

main();
