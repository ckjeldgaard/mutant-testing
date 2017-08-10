var greet = require('../src/greet');

test('return a hello string', () => {
  expect(greet("World!")).toBe("Hello World!");
});
