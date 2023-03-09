function dirReduc(arr){
    const oppositeDirections ={
        'NORTH' : 'SOUTH',
        'SOUTH' : 'NORTH',
        'EAST' : 'WEST',
        'WEST' : 'EAST'
    }

    let result = [];

    for(const direction of arr){
        if(result.length > 0 && oppositeDirections[direction] == result[result.length-1]){
            result.pop();
        } else {
            result.push(direction);
        }
    }
    return result;
  }

  dirReduc(['NORTH', 'SOUTH']);