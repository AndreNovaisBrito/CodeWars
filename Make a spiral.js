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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function spiralize (n) {
    console.clear();
    let spiral = []
    const TIMEOUT = 3000;

    for(let i = 0; i<n+2; i++){
        spiral.push([])
        for(let j = 0; j<n+2; j++){
            spiral[i].push(0)
        }
    }

    let lastIndex = Math.floor(n/2)

    n+=2
    let topRow = 1;
    let bottomRow = n - 2;
    let leftCol = 1;
    let rightCol = n - 2;
    let iterator = 0


    while(iterator < 10){
        //Add top row left to right
        for(let i = leftCol-1; i<= rightCol; i++){
            if(spiral[topRow-1][i] || spiral[topRow][i+1] || spiral[topRow+1][i]){
                trimMatrix(spiral);
                return spiral
            }
            spiral[topRow][i] = 1;
        }
        topRow+=2;



        //Add right column top to bottom
        for(let i = topRow-1; i<= bottomRow; i++){
            if(spiral[i][rightCol-1] || spiral[i][rightCol+1] || spiral[i+1][rightCol]){
                trimMatrix(spiral);
                return spiral
            }
            spiral[i][rightCol]=1;
        }
        rightCol-=2

        //Add bottom row right to left
        for(let i = rightCol+1; i >= leftCol ; i-- ){
            if(spiral[bottomRow][i-1] || spiral[bottomRow-1][i] || spiral[bottomRow+1][i]){
                trimMatrix(spiral);
                return spiral
            }
            spiral[bottomRow][i] = 1;
        }
        bottomRow-=2;


        //Add left column bottom to up
        for(let i = bottomRow+1 ; i >= topRow ; i--){
            if(spiral[i-1][leftCol] || spiral[i][leftCol-1] || spiral[i][leftCol+1]){
                trimMatrix(spiral);
                return spiral
            }
            spiral[i][leftCol]=1
        }
        leftCol+=2
        iterator++
    }
    trimMatrix(spiral);
    return spiral
    
}
console.table(spiralize(30))