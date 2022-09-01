const solution = require('./alphabeticShift.js');

test('test 1', () => {
    expect(solution("crazy")).toBe("dsbaz");
});

test('test 2', () => {
    expect(solution("z")).toBe("a");
});

test('test 3', () => {
    expect(solution("aaaabbbccd")).toBe("bbbbcccdde");
});

test('test 4', () => {
    expect(solution("fuzzy")).toBe("gvaaz");
});

test('test 5', () => {
    expect(solution("codesignal")).toBe("dpeftjhobm");
});
