
# [Palindrome Strings](https://www.codewars.com/kata/palindrome-strings/train/javascript)

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

### Examples
```
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false
```
---
### Solution
```javascript
function isPalindrome(line) {
   return ((line.split('').reverse().join('')) === line ? true : false);
}

```