function getPINs(observed) {
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

    let variations = [''];

    for(const digit of observed){
        // const digit = observed[1]
        let adjacent = adjacentDigits[digit]
        let newVariation = []
        for(const variation of variations){
            for(const adj of adjacent){
                console.log('variation:',variation)
                console.log('adj: ', adj)
                newVariation.push(variation+adj)
            }
        }
        variations.length = 0;
        variations.push(...newVariation)
        console.log(variations)
    }
    return variations;

  }
getPINs('1337');