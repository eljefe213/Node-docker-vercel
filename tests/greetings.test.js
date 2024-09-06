const { greet, bye } = require("../service/greetings");

describe("Testing Greetings Functions", () => {
  it("Should return a personalized greeting message", () => {
    expect(greet("Tester")).toBe("Hey there, Tester!"); 
  });

  it("Should return a friendly farewell message", () => {
    expect(bye("Tester")).toBe("See you soon, Tester!"); 
  });

  it("Should handle null values for greeting", () => {
    expect(greet(null)).toBe("Hey there, null!");  
  });
});
