const fs = require('fs');
const { parsePage } = require('../src/parser');

const example = fs.readFileSync(__dirname + "/example.html");

describe("Parser", () => {
  it('should parse the title', () => {
    const parsed = parsePage(example);

    expect(parsed.title).toBe("Example Domain");
  })
})