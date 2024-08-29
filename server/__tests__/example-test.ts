const request = require('supertest');
const app = require('../src/main');

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
  });
});
