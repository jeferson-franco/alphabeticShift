function solution(inputString) {
    return inputString
        .split('')
        .map((char) => (char.charCodeAt(0) === 122 ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1)))
        .join('');
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test alphabeticShift

// alternative solution
// function solution(s) {
//     let c = 'abcdefghijklmnopqrstuvwxyza';
//     return s.replace(/./g, (x) => c[c.indexOf(x) + 1]);
// }

// alternative solution
// B = Buffer;
// solution = (s) => B([...B(s)].map((e) => ((e - 96) % 26) + 97)) + '';

// alternative solution
// const solution = (inputString) =>
//     inputString
//         .split('')
//         .map((el) => (el === 'z' ? 'a' : String.fromCharCode(el.charCodeAt() + 1)))
//         .join('');
