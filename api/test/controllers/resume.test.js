import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

/**
 * Tests for '/api/resume'
 */

describe('Test resume routes without token', function () {
  this.timeout(100000);

  it('should return user resume if email is provided', (done) => {
    request(app)
      .get('/api/resume/nikitashrestha@lftechnology.com')
      .end(async (err, res) => {
        const result = await res;
        expect(result.status).to.be.equal(200);
        expect(res.body).to.be.a('string');

        done();
      });
  });

  it('should return unauthorized if email provided doesnot exist', (done) => {
    request(app)
      .get('/api/resume/nik.stha81@gmail.com')
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(404);
        expect(code).to.be.equal(404);
        expect(message).to.be.equal('There is no user record corresponding to the provided identifier.');

        done();
      });
  });
});
