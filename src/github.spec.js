import unmock, { transform } from 'unmock';
import fetchGitHubRepos from './github';

let github;

process.env.GITHUB_TOKEN = 'fake';

describe('Fetching GitHub repositories', () => {
  beforeAll(() => { github = unmock.on().services.githubv3; });
  afterAll(() => { unmock.off(); });

  beforeEach(() => {
    github.state(transform.withCodes(200));
  });
  it('fetches repositories', async () => {
    const repos = await fetchGitHubRepos();
    expect(repos.length).toBeGreaterThan(0);
  });
});
