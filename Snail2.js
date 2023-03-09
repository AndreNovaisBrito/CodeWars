snail = function(array) {
    // enjoy
    let result=[];
    while(array.length){
        //Remove first Row left to right
        result.push(...array.shift())
        console.log('array: ',array)
        console.log('result: ', result)
        //Remove last column
        for(let i = 0; i < array.length ; i++){
            result.push(array[i].pop());
            
        }
        console.log('array: ',array)
        console.log('result: ', result)
        //Remove last Row right to left
        if(array.length){
            result.push(...array.pop().reverse())
        }
        //Remove first column bottom to up
        if(array.length){
            for(let i = array.length-1; i>=0 ; i--){
                result.push(array[i].shift());
            }
        }
    }
    console.log(result)
    return result;
  }
  snail([[1, 2, 3],
         [4, 5, 6], 
         [7, 8, 9]])