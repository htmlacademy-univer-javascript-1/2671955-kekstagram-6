function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

console.log(checkLength('строка', 10));
console.log(checkLength('ещё строка', 5));

function checkPalindromes(str) {
  const upperString = str.toUpperCase();
  let newString = '';
  for (let i = upperString.length - 1; i >= 0; i--) {
    newString += upperString.at(i);
  }
  return newString === upperString;
}

console.log(checkPalindromes('шалаш'));
console.log(checkPalindromes('яблоко'));
