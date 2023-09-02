module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const openBrackets = [];
    const closeBrackets = [];
    const matchingBrackets = {};
  
    for (let i = 0; i < bracketsConfig.length; i++) {
      const [openBracket, closeBracket] = bracketsConfig[i];
      openBrackets.push(openBracket);
      closeBrackets.push(closeBracket);
      matchingBrackets[closeBracket] = openBracket;
    }
  
    for (let i = 0; i < str.length; i++) {
      const currentBracket = str[i];
  
      if (openBrackets.includes(currentBracket)) {
        if (closeBrackets.includes(currentBracket) && stack.length > 0 && stack[stack.length - 1] === currentBracket) {
          stack.pop();
        } else {
          stack.push(currentBracket);
        }
      } else if (closeBrackets.includes(currentBracket)) {
        if (stack.length > 0 && stack[stack.length - 1] === matchingBrackets[currentBracket]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    return stack.length === 0;
}
