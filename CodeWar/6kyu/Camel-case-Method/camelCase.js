String.prototype.camelCase=function(){
    return this.split(/[\s]+/).map((i) => i=== ''? '' : i[0].toUpperCase()+i.substr(1)
    ).join('')
   }

"hello case".camelCase()   