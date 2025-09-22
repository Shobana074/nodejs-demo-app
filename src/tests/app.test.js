const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return hello world message", async () => {
    const res = await request(app).get("/").expect(200);

    expect(res.body.message).toBe("Hello World! CI/CD Pipeline is working!");
  });
});

describe("GET /health", () => {
  it("should return healthy status", async () => {
    const res = await request(app).get("/health").expect(200);

    expect(res.body.status).toBe("healthy");
  });
});
