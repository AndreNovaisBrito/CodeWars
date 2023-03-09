function moveZeros(arr) {
    let result = [];
    result = arr.filter((e)=>e!==0).concat(arr.filter((e)=>e===0));
    console.log(result);
    return result;
  }

  moveZeros([1,2,0,1,0,1,0,3,0,1])