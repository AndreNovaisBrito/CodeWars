snail = function(array) {
  // enjoy
  
//   if(array == [[]]) return [];
//   if(array == [[1]]) return [1];
//   console.log(array[2][0])
  let resultArr = [];
  console.log('array =',array)

  while(array.length){
        //Remove first row
        resultArr.push(...array.shift());
        console.log('array =',array)

        //Remove last column top to bottom
        for(let i = 0; i < array.length ; i++){
            resultArr.push(array[i].pop())
        }
        console.log('array =',array)

        // Remove bottom row, right to left
        if(array.length){
            resultArr.push(...array.pop().reverse())
        }
        console.log('array =',array)

        // Remove first column, bottom to up
        for(let i = array.length-1; i >= 0 ; i--){
            resultArr.push(array[0].shift())
        }
        console.log('array =',array)
    }
  
  console.log('result= ', resultArr)
  return resultArr;
}
snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])