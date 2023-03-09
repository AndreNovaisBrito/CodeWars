var maxSequence = function(arr){
    // ...
    if (arr.length == 0) return 0
    if (arr.length == 1) return arr[i] > 0 ? arr[0] : 0;

    let max = arr[0]
    let sum = 0

    for (let i = 0; i < arr.length ; i++){
      if(sum < 0) sum = 0;
      sum += arr[i];
      console.log('sum= ', sum)
      max = Math.max(sum, max);
      console.log('max = ', max)
    }
    if(max < 0) return 0
    return max;
  
  }

maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4])