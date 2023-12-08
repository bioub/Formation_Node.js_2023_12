// Test functional
// GET /api/todos
// Expect: 200 [{ title: 'ABC', _id: 'abcdef1234', completed: false }]

const { describe, it } = require("mocha");
const { use, expect } = require("chai");
const chaiHttp = require("chai-http");
const Sinon = require("sinon");
const sinonChai = require("sinon-chai");
const app = require("../../app");

use(sinonChai);
use(chaiHttp);

const { request } = require("chai");
const { default: mongoose } = require("mongoose");
const Todo = require("../../models/todo");

describe("Todos routes", () => {
  describe("GET /api/todos", () => {
    // it("should respond data from database", async () => {
    //   await mongoose.connect("mongodb://localhost:27017/test");
    //   const res = await request(app).get("/api/todos");
    //   expect(res).to.have.status(200);
    //   expect(res.body).to.deep.equal([
    //     {
    //       __v: 0,
    //       _id: "65731727f8ad5a34c8b78efd",
    //       completed: false,
    //       title: "Acheter du pain",
    //     },
    //   ]);
    //   await mongoose.disconnect();
    // });

    it("should respond data from database with mock", async () => {
      // Todo.find = async () => [{ title: 'ABC', _id: 'abcdef1234', completed: false }]

      const mock = Sinon.mock(Todo)
        .expects("find")
        .resolves([{ title: "ABC", _id: "abcdef1234", completed: false }]);

      const res = await request(app).get("/api/todos");
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal([
        { title: "ABC", _id: "abcdef1234", completed: false },
      ]);

      expect(mock).to.have.been.calledOnce;

      Sinon.verifyAndRestore();
    });
  });

  // Exercice
  // Tester le GET /api/todos/abdcef1234
  // avec un mock de findById
  describe("GET /api/todos/abdcef1234", () => {
    it("should respond data from database with mock", async () => {
      const mock = Sinon.mock(Todo)
        .expects("findById")
        .resolves({ title: "ABC", _id: "abcdef1234", completed: false });

      const res = await request(app).get("/api/todos/abdcef1234");
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal({
        title: "ABC",
        _id: "abcdef1234",
        completed: false,
      });

      expect(mock).to.have.been.calledOnce;

      Sinon.verifyAndRestore();
    });
  });
});
