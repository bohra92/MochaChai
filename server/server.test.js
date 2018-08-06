const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;
describe('server tests', () => {

  it('should expect proper response from the server express', (done) => {

    request(app)
      .get('/User')
      .expect(200)

      .expect((res) => {
        expect(res.body).toInclude({
          name: "tanuj",
          age: '25'
        })
      })
      .end(done);
  })
})
