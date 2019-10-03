import axios from 'axios';
import logger from './logging';

require('dotenv').config();

const GITHUB_API = 'https://api.github.com';
const REPOSITORIES_PATH = '/user/repos';

let axiosInstance;

const axiosClient = () => {
  if (axiosInstance) {
    return axiosInstance;
  }

  if (!process.env.GITHUB_TOKEN) {
    throw Error('Environment variable GITHUB_TOKEN missing!');
  }

  axiosInstance = axios.create({
    baseURL: GITHUB_API,
    timeout: 10000,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  return axiosInstance;
};

/**
 * Remove any unnecessary fields from the GitHub repository response
 * https://developer.github.com/v3/repos/
 * @param repository GitHub repository response object
 * @returns Transformed repository object
 */
const transform = (repository) => ({
  name: repository.full_name,
  url: repository.html_url,
  description: repository.description,
  stars: repository.stargazers_count,
});

/**
 * Fetch all GitHub repositories for the authenticated user.
 * API documentation: https://developer.github.com/v3/repos/
 */
const fetchGitHubRepos = async () => {
  const client = axiosClient();
  logger.info(`Making a request to: ${GITHUB_API}, path: "${REPOSITORIES_PATH}"`);
  const axiosResult = await client.get(REPOSITORIES_PATH);
  const { data } = axiosResult;
  logger.info(`Found ${data.length} repositories`);
  return data
    .filter((repository) => repository.private !== true)
    .map((repository) => transform(repository));
};

export default fetchGitHubRepos;
