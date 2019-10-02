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
    timeout: 1000,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  return axiosI;
};


const fetchGitHubRepos = async () => {
  const instance = axiosInstance();
  const axiosResult = await instance.get('/user/repos');
  const { data } = axiosResult;
  console.log(data);
  return data;
};

export default fetchGitHubRepos;
