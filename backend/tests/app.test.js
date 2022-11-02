const request = require('supertest');
const app = require('../app.js');

describe('POST', () => {
  // 200 status code
  // json
  // { hello: 'hello' }
  it('test /', async () => {
    await request(app)
      .post('/')
      .send({ hello: 'hello' })
      .expect(200)
      .expect({ hello: 'hello' });
  });

  // 200 status code
  // json
  // { hello1: 'hello1' }
  it('test /', async () => {
    await request(app)
      .post('/')
      .send({ hello1: 'hello1' })
      .expect(200)
      .expect({ hello1: 'hello1' });
  });

  // 200 status code
  // json
  // { hello1: 'hello1' }
  it('test /', async () => {
    await request(app)
      .post('/')
      .send({ hello11: 'hello11' })
      .expect(200)
      .expect({ hello1: 'hello1' });
  });
});