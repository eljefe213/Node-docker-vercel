const request = require("supertest");
const app = require("../src/hello");

describe("GET /hello/:name", () => {
  it("Should respond with a personalized welcome message", async () => {
    const response = await request(app).get("/hello/Tester");

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Hey there, Tester!"); 
  });

  it("Should handle null values gracefully for hello route", async () => {
    const response = await request(app).get(`/hello/${null}`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Hey there, null!"); 
  });
});

describe("GET /goodbye/:name", () => {
  it("should respond with a farewell message", async () => {
    const response = await request(app).get("/goodbye/Tester");

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("See you soon, Tester!"); 
  });

  it("should handle null values gracefully for goodbye route", async () => {
    const response = await request(app).get(`/goodbye/${null}`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("See you soon, null!"); 
  });
});
