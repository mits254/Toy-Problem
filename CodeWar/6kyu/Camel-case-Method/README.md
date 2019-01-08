
# [CamelCase Method](https://www.codewars.com/kata/587731fda577b3d1b0001196)

 Write simple .camelCase method (camel_case function in PHP, CamelCase in            C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

### Examples
```javascript
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
```
---

### Solution
```javascript
String.prototype.camelCase=function(){
    return this.split(/[\s]+/).map((i) => i=== ''? '' : i[0].toUpperCase()+i.substr(1)
    ).join('')
}
```

