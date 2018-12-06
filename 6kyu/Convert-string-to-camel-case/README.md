
#[Convert String to Camel Case] (https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript)

Complete the method/function so that it converts dash/underscore              delimited words into camel casing. The first word within the output              should be capitalized only if the original word was capitalized.

### Examples 
```javascript
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
```

----

### Solution 
```javascript
function toCamelCase(str){
    return str.split(/[\-_]+/).map((i, index) => index === 0 ? i : i[0].toUpperCase()+i.substr(1)
    ).join('')
   } 
```   
