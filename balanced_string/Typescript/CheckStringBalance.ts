const charObj = {
 '(': ')',
 '{': '}',
 '[': ']',
}

let CheckBalance = (str: string) => {
  let stack: string[] = [];

  for(let i: number = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    }
    else {
      if(CheckClosingMatch(stack[stack.length - 1], str[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length == 0;
}

let CheckClosingMatch = (opener: string, candidate: string): boolean => { return candidate === charObj[opener]; }

let testCases: string[] = ['(()[])', '([{]})', '(()'];

testCases.forEach(test => {
  let result = CheckBalance(test);
  console.log(`test case ${test} balanced -> ${result}\n`);
})