function getPINs(observed) {
    // TODO: This is your job, detective!
    console.clear();
    const adjacentDigits = {
        '1': ['1','2','4'],
        '2': ['2','1','5','3'],
        '3': ['3','2','6'],
        '4': ['4','1','5','7'],
        '5': ['5','2','4','6','8'],
        '6': ['6','3','5','9'],
        '7': ['7','4','8'],
        '8': ['8','5','7','9','0'],
        '9': ['9','6','8'],
        '0': ['0','8']
    }
    const variations= [''];

    for(const digit of observed){ 
        console.log('currDigit= ', digit)
        const adjacent = adjacentDigits[digit];
        // console.log('ajacent of currDigit= ',adjacent)
        const newVariations = []; 
        for(const variation of variations) {
            // console.log('current variation= ', variation);
            for(const adj of adjacent) { 
                // console.log('current adjacent= ', adj)
                newVariations.push(variation+adj) 
                // console.log('newVariation= ', newVariations)
            }
        }
        variations.length = 0;
        variations.push(...newVariations);
        console.log('final variation of the digit', variations)
    }

    console.log('final result:', variations)
    return variations;
  }

  getPINs('1337');