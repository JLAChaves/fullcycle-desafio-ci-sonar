const math = require("./math");
const stringUtils = require("./stringUtils");

function runDemo() {
  console.log("=== Math Demo ===");
  console.log("2 + 3 =", math.soma(2, 3));
  console.log("5 - 2 =", math.subtrai(5, 2));
  console.log("3 * 4 =", math.multiplica(3, 4));
  console.log("10 / 2 =", math.divide(10, 2));
  console.log("Média [2,4,6] =", math.media([2, 4, 6]));

  console.log("=== String Demo ===");
  console.log("Capitalize 'hello':", stringUtils.capitalize("hello"));
  console.log("Reverse 'abc':", stringUtils.reverse("abc"));
  console.log("Is 'ana' palindrome?:", stringUtils.isPalindrome("ana"));
}

if (require.main === module) {
  runDemo();
}

module.exports = { runDemo };
