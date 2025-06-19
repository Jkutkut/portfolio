export interface RepoIdentifier {
  type: 'github';
  usr: string;
  repoName: string;
}

export type RepoData = {
  name: string;
  description: string;
  topics: string[];
  full_name: string;
  url: string;
};
