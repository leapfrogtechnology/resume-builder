import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

/**
 * Tests for '/api/users'
 */

describe('Test user routes with token', function () {
  it('should return user resume', (done) => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWREYXRhIjp7ImVtYWlsIjoibmlraXRhc2hyZXN0aGFAbGZ0ZWNobm9sb2d5LmNvbSIsInVpZCI6ImZveE1lYThCUFVOSExuUDBNeTBkRUMxWW94ZzEifSwiaWF0IjoxNTkwNzQ0OTQxLCJleHAiOjE1OTA3NDUyNDF9.ZFpTfdFsfcklPInU9cUSdEvv2p9asn_Wv_P1nC616Y0';

    request(app)
      .get('/api/users/self')
      .set('Authorization', 'Bearer ' + accessToken)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.a('string');

        done();
      });
  });

  it('should return unauthorized if access token provided is expired/invalid', (done) => {
    const accessToken = 'expires/invalid token';

    request(app)
      .get('/api/users/self')
      .set('Authorization', 'Bearer ' + accessToken)
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(401);
        expect(code).to.be.equal(401);
        expect(message).to.be.equal('Access Token Unauthorized');

        done();
      });
  });
});
