function isPalindrome(line) {
    return String(line).split('').reverse().join('') === String(line);
  }
  module.exports = isPalindrome;
  isPalindrome('anna')
  isPalindrome('walter')
  isPalindrome(12345)

  