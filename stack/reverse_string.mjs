import { Stack } from "./stack_ll.mjs";

// tintin nitnit

export function reverseString(str) {
  const stack = new Stack();

  if (str.length < 2) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let result = "";
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}

export function isPalindrome(str) {
  return str === reverseString(str);
}

console.log(reverseString("tintin"));
console.log(isPalindrome("tintin"));
console.log(isPalindrome("radar"));
