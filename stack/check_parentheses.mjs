import { Stack } from "./stack_ll.mjs";

// const str = "([{()()a+b}])";

function checkParentheses(expr) {
  const stack = new Stack();
  if (!expr.length) {
    return true;
  }
  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const stackTop = stack.pop();
      if (char === ")" && stackTop !== "(") {
        return false;
      } else if (char === "]" && stackTop !== "[") {
        return false;
      } else if (char === "}" && stackTop !== "{") {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log(checkParentheses("([{()()a+b}])]]"));
