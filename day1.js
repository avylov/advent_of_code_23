const fs = require('fs');

const input = fs.readFileSync('/Users/avylov/dev/adv_code_23/day1_part1_input.in', 'utf8').trimEnd();

let part1 = 0;
let part2 = 0;

input.split('\n').map(line => {
  const part1_digits = [];
  const part2_digits = [];
  
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    
    if (!isNaN(c)) {
      part1_digits.push(c);
      part2_digits.push(c);
    }
    
    const values = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let d = 0; d < values.length; d++) {
      if (line.substring(i).startsWith(values[d])) {
        part2_digits.push((d + 1).toString());
      }
    }
  }
  
  part1 += parseInt(part1_digits[0] + part1_digits[part1_digits.length - 1]);
  part2 += parseInt(part2_digits[0] + part2_digits[part2_digits.length - 1]);
});

console.log(part1);
console.log(part2);