function spiralize (n) {
    console.clear();
    let spiral = []

    for(let i = 0; i<n; i++){
        spiral.push([])
        for(let j = 0; j<n; j++){
            spiral[i].push(0)
        }
    }
    console.log(spiral)
    let lastIndex = Math.floor(n/2)

    let num = 1; // Start filling the spiral with 1
    let topRow = 0;
    let bottomRow = n - 1;
    let leftCol = 0;
    let rightCol = n - 1;

    while(num <= n*n){
        //Add first row left to right
        for(let i = leftCol; i<= rightCol; i++){
            spiral[topRow][i] = num;
            num++
        }
        topRow++;
        console.log(spiral)
        //Add last column top to bottom
        for(let i = topRow; i<= bottomRow; i++){
            spiral[i][rightCol]=num;
            num++;
        }
        rightCol--

        //Add last row right to left
        for(let i = rightCol; i >= leftCol ; i-- ){
            spiral[bottomRow][i] = num;
            num++
        }
        bottomRow--;
        //Add first column bottom to up
    }


	return [];
}
spiralize(5)