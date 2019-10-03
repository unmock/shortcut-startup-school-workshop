/* global describe, beforeAll, afterAll, beforeEach, it */
import fetchGitHubRepos from './github';

process.env.GITHUB_TOKEN = 'fake';

describe.skip('Fetching GitHub repositories', () => {
  it.skip('finds repositories', async () => {
    const repos = await fetchGitHubRepos();
    expect(repos.length).toBeGreaterThan(0);
  });
});
