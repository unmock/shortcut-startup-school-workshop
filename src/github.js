import axios from 'axios';

require('dotenv').config();

let axiosI;

const axiosInstance = () => {
  if (axiosI) {
    return axiosI;
  }

  if (!process.env.GITHUB_TOKEN) {
    throw Error('No GitHub token!');
  }

  axiosI = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  return axiosI;
};


const fetchGitHubRepos = async () => {
  const instance = axiosInstance();
  console.log('Making a request to GitHub: /user/repos');
  const axiosResult = await instance.get('/user/repos');
  const { data } = axiosResult;
  console.log(`Found ${data.length} repositories from github`);
  return data;
};

export default fetchGitHubRepos;
