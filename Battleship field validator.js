function trimMatrix(matrix){
    //remove top
    matrix.shift()
    //remove right
    for(let i = 0; i<matrix.length; i++){
        matrix[i].pop();
    }
    //remove bottom
    matrix.pop();
    //remove left;
    for(let i = 0; i<matrix.length; i++){
        matrix[i].shift();
    } 
}

function validateBattlefield(field) {
    // write your magic here
    console.clear()
    //Add outter layer
    //Add top row
    field.unshift([0,0,0,0,0,0,0,0,0,0])
    //Add right column
    for(let i = 0; i<11 ; i++){
        field[i].push(0)
    }
    //Add bottom row
    field.push([0,0,0,0,0,0,0,0,0,0,0,0])
    //Add left column
    for(let i = 0; i<11 ; i++){
        field[i].unshift(0)
    }
    console.table(field)
    let subCount = 0
    //Look for 4 1x1 submarines
    for(let i = 1; i < 11 ; i++){
        for(let j = 1; j<11 ; j++){
            if(field[i-1][j-1] == 0 && field[i-1][j] == 0 && field[i-1][j+1] == 0 &&
               field[i]  [j-1] == 0 && field[i]  [j] == 1 && field[i]  [j+1] == 0 &&
               field[i+1][j-1] == 0 && field[i+1][j] == 0 && field[i+1][j+1] == 0   ){
                subCount++;
                console.log(subCount)
               }
        }

    }
    //Look for 3 2x1 destroyers
    //Look for 2 3x1 cruisers
    //Look for 1 4x1 battleship



    
  }

  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])