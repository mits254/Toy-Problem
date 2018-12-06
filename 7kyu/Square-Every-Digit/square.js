function squareDigits(num){
    let dig = [];
    [...num.toString()].forEach(i => dig.push(i*i));
    return parseInt(dig.join(''));
  }

  squareDigits(91191);