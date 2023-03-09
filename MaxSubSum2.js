var maxSequence = function(arr){
    let maxSum = 0
    let currSum = 0

    for(let i = 0; i< arr.length ; i++){
        if(currSum < 0) currSum = 0
        currSum+= arr[i];
        maxSum = Math.max(maxSum, currSum)
    }
    console.log(maxSum)
    return maxSum

}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])