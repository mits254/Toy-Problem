const isPrime = num => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const gap = (g, m, n) => {
    let lastPrime = 0;
    for (let i = m; i <= n; i++) {
      if (isPrime(i)) {
        if (i - lastPrime == g) return [lastPrime, i];
        else lastPrime = i;
      }
    }
    return null;
  };