function fib(n) {
    let a = BigInt(0)
    let b = BigInt(1)
    if (n == 0) return a;
    if (n == 1) return b;
    let result;

    if (n < 0){

        for(let i = -1; i >= n ; i--){
            result = b - a;
            b = a;
            a = result;
        }
        return result
    }
    
    for(let i = 2; i <= n ; i++){
        result = a + b;
        a = b;
        b = result;
    }

    return result;
  }

  console.log(fib(1166621));