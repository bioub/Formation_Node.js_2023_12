const { describe, it, beforeEach, afterEach } = require("mocha");
const authenticate = require("../../middlewares/authenticate");
const { tokens } = require("../../models/user");
const { expect, use } = require("chai");
const Sinon = require("sinon");
const sinonChai = require("sinon-chai");

use(sinonChai);

describe('authenticate middleware', () => {
  beforeEach(() => {
    tokens.push('temp-token');
  });

  afterEach(() => {
    tokens.pop();
  });

  it('should call next when token is valid', () => {
    const req = {
      headers: {
        authorization: 'temp-token'
      }
    };
    const res = {};
    const next = Sinon.spy();
    authenticate(req, res, next);

    expect(next).to.have.been.called;
    // expect(next.called).to.be.true;


    // let nextCalled = false;
    // const next = () => {
    //   nextCalled = true;
    // };
    // authenticate(req, res, next);
    // expect(nextCalled).to.be.true;
  });

  // Exercice
  // Tester que le status soit 401
  // et res.json appelé lorsque le token n'est pas valide
  it('should call json when token is invalid', () => {
    const req = {
      headers: {
        authorization: 'bad-token'
      }
    };
    const res = {
      json: Sinon.spy()
    };
    const next = () => {};
    authenticate(req, res, next);

    expect(res.statusCode).to.equal(401);
    expect(res.json).to.have.been.calledWith({
      msg: 'Unauthorized',
    });
  });

});
