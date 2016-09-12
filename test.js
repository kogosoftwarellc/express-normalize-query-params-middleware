var expect = require('chai').expect;
var normalizeQueryParams = require('./');

describe('normalize query params', function() {
  var req;

  beforeEach(function() {
    req = {
      query: {
        someparam: 5
      }
    };
  });

  it('should normalize configured params', function(done) {
    normalizeQueryParams(['someParam'])(req, null, function() {
      expect(req.query.someParam).to.equal(5);
      done();
    });
  });
});
