function nextBigger(n){
    console.clear();
    //Array of digits
    let digits = n.toString().split('')
    console.log(digits)
    //Find the pivot point: the rightmost digit that is smaller than the digit to its right. 
    //If there is no such digit, the number is already the largest possible permutation, so return it.
    let pivot=-1;
    for(let i = digits.length-2; i>= 0 ; i--){
        if(digits[i]<digits[i+1]) {
            pivot = i
            break;
        };
    }
    if(pivot === -1) return -1;

    console.log('pivot',digits[pivot])
    
    let larger=-1;
    //Find the rightmost digit larger than the pivot.
    for(let i = digits.length -1; i> pivot ; i--){
        if(digits[i]>digits[pivot]){
            larger = i;
            break;
        }
    }
    console.log('larger: ',digits[larger])

    //Swap the pivot and the rightmost digit.
    let temp = digits[pivot];
    digits[pivot] = digits[larger];
    digits[larger] = temp;
    console.log('digits',digits)

    //Sort the digits after the pivot.
    const suffix = digits.splice(pivot + 1).sort();
    console.log('prefix: ', digits)
    console.log('suffix: ', suffix)
    digits.push(...suffix);

    //Convert the array back to a number and return it.
    let ans = parseInt(digits.join(''), 10)
    console.log('ans',ans)
    return ans;

  }

  nextBigger(1898765)