/* global describe, beforeAll, afterAll, afterEach, beforeEach, it, expect */  // eslint-disable-line
import unmock, { transform } from 'unmock';
import buildApp from './app';
const request = require('supertest');

process.env.GITHUB_TOKEN = 'fake';

let githubv3;

describe('Express app', () => {
  const app = buildApp();

  beforeAll(() => {
    // Activate Unmock to intercept requests
    unmock.on();
    // Access the `githubv3` service added from `@unmock/githubv3` package
    githubv3 = unmock.services.githubv3;
  });

  afterAll(() => {
    unmock.off();
  });

  describe('/api/repositories endpoint', () => {
    beforeEach(() => {
      githubv3.state(transform.withCodes(200));
    });

    afterEach(() => {
      unmock.reset();
    });
    it('should return an array', async () => {
      const response = await request(app)
        .get('/api/repositories')
        .expect(200);
      expect(Array.isArray(response.body)).toBeTruthy();
    });
  });
});
