function diffArray(arr1, arr2) {
    const newArr = [];
    function onlyInFirst(first, second) {
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          newArr.push(first[i]);
        }
      }
    }
    return newArr;
  }