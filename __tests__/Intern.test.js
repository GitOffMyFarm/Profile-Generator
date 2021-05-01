const Intern = require("../lib/intern");

test("Can set School name via constructor", () => {
    const testValue = "University";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "University");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get school name via getSchool()", () => {
    const testValue = "University";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });