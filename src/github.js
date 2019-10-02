import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

const fetchGitHubRepos = async () => {
  const axiosResult = await instance.get('/user/repos');
  const { data } = axiosResult;
  console.log(data);
  return data;
};

export default fetchGitHubRepos;
