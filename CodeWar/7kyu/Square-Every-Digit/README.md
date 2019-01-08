
# [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020)

Welcome. In this kata, you are asked to square every digit of a number.

### Example 

```
if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
```
### Solution 
```javascript
function squareDigits(num){
  let dig = [];
  [...num.toString()].forEach(i => dig.push(i*i));
  return parseInt(dig.join(''));
}
```