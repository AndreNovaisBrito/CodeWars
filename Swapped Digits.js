function getSwappedDigitCombinations(number) {
    //Convert the number to digits array
    const digits = number.toString().split('');

    //Create an array to store the combinations
    const combinations = [];
  
    //Double Loop through the array, starting at 0 and 1, i = 0 and j = i+1
    for (let i = 0; i < digits.length; i++) {
      for (let j = i + 1; j < digits.length; j++) {
        //Create and array so we can mutate(swap digits)
        const swappedDigits = [...digits];
        //Swap Digits i and j
        [swappedDigits[i], swappedDigits[j]] = [swappedDigits[j], swappedDigits[i]];
        console.log(swappedDigits);
        console.log(`Swapped digits[${i}][${j}]`);
        //push the new combination into the combinations array, also join the digits
        combinations.push(parseInt(swappedDigits.join('')));
      }
    }
    console.log(combinations)
  
    return combinations;
  }

  getSwappedDigitCombinations(1234)