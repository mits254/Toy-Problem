 # [Find Nth Longest String in an Array](https://www.codewars.com/kata/5594c4599934000e1e00002e)

 Implement the function `longest(array,n)` where you will be given an array of strings and then return the nth longest string in that array. e.g. `arr = ['Hello','World','Codewars','Katas']` `n = 3;` should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). When words have the same lengths, treat them in the order in which they exist in the array. Array will never be empty and n > 0 always.

---

### Solution

```javascript
function longest(arr, n) {
    let newarr = arr.slice(0);
    newarr.sort((a, b) => {
        return b.length - a.length || arr.indexOf(a) - arr.indexOf(b)
    });
    return newarr[n - 1];
}
```