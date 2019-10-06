/* global describe, beforeAll, afterAll, beforeEach, it, expect */ // eslint-disable-line
// import fetchGitHubRepos from './github';

process.env.GITHUB_TOKEN = "fake";

describe("Fetching GitHub repositories", () => {
  it("should fail", () => {
    expect(1).toBe(1);
  });
  it.todo("should return an array of repositories");
  it.todo("should transform repositories as expected");
  it.todo("should not return private repositories");
});
