function primeFactors(n){
    let pf = [];
    let count =0;
    for(i= 2; i <= Math.ceil(Math.sqrt(n));i++){
      if(n % i === 0 ) {
        pf.push(i);
        n = n/i;
        i = 1;
      }
      if (i === Math.ceil(Math.sqrt(n))){
        pf.push(n);
      }
    }
    let string = '';
    for ( i=0;i< pf.length;i++){
      if(pf[i] === pf[i+1]){
        count ++;
      } else{
        if(count > 0){
        string = string + '('+pf[i]+'**'+(count+1)+')'
        count = 0
        } else{
          string = string + '('+pf[i]+')'
        }
      }
    }
    return string
}

primeFactors(7775460)