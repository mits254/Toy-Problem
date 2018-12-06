function toCamelCase(str){
    return str.split(/[\-_]+/).map((i, index) => index === 0 ? i : i[0].toUpperCase()+i.substr(1)
    ).join('')
   }
toCamelCase("The_Stealth_Warrior")  



toCamelCase('')
toCamelCase('the_stealth_warrior')
toCamelCase('The-Stealth-Warrior')
toCamelCase('A-B-C')