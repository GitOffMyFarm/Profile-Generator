const Manager = require("../lib/manager");

test("Can set office number via constructor", () => {
    const testValue = 123;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 123);
    expect(e.getRole()).toBe(testValue);
  });