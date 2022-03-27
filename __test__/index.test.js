const request = require("supertest");
const app = require("../index");

describe("Get route", () => {
  test("page should return hello world", async () => {
    await new Promise(async (done) => {
      const res = await request(app).get("/");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual("Hello world");
      done();
    });
  });
});

afterAll(async () => {
  await app.close();
});
