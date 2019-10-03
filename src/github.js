import axios from 'axios';
import logger from './logging';

require('dotenv').config();

const GITHUB_API = 'https://api.github.com';
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
 * Fetch all GitHub repositories for the authenticated user.
 * API documentation: https://developer.github.com/v3/repos/
 */
const fetchGitHubRepos = async () => {
  const instance = axiosClient();
  const path = '/user/repos';
  logger.info(`Making a request to: ${GITHUB_API}, path: ${path}`);
  const axiosResult = await instance.get(path);
  const { data } = axiosResult;
  logger.info(`Found ${data.length} repositories`);
  return data;
};

export default fetchGitHubRepos;
