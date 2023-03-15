function getSwappedDigitCombinations(number) {
    const digits = number.toString().split('');
    const combinations = [];
  
    for (let i = 0; i < digits.length; i++) {
      for (let j = i + 1; j < digits.length; j++) {
        const swappedDigits = [...digits];
        [swappedDigits[i], swappedDigits[j]] = [swappedDigits[j], swappedDigits[i]];
        console.log(swappedDigits);
        console.log(`Swapped digits[${i}][${j}]`);
        combinations.push(parseInt(swappedDigits.join('')));
      }
    }
    console.log(combinations)
  
    return combinations;
  }

  getSwappedDigitCombinations(1234)