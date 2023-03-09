function moveZeros(arr) {
    let zeroCount = 0
    let result = [];
    for (let i = 0; i<arr.length ; i++){
      if(arr[i] !== 0){
        result.push(arr[i])
      } else {
        zeroCount++;
      }
    }
    while( zeroCount > 0){
      result.push(0);
      zero
    }
    return result;
  }