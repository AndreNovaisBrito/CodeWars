function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
function permute(arr) {
    const combinations = [];
    const stack = [[arr.slice(),0]]
    while(stack.length > 0){
        const [currentPartialPermutation, i] = stack.pop();
        if(i === currentPartialPermutation.length -1){
            combinations.push(currentPartialPermutation);
        } else {
            for(let j=i; j<currentPartialPermutation.length ; j++){
                swap(currentPartialPermutation, i, j); 
                stack.push([currentPartialPermutation.slice(), i+1]); 
                swap(currentPartialPermutation, i ,j); 
            }
        }
    }
    return combinations;
  }
permute([1,2,3])