function generateSpiral(size) {
    // Initialize the spiral with all zeros
    const spiral = Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
  
    let num = 1; // Start filling the spiral with 1
    let row = 0;
    let col = 0;
    let dir = 'right';
  
    while (num <= size * size) {
      spiral[row][col] = num;
      num++;
  
      switch (dir) {
        case 'right':
          if (col === size - 1 || spiral[row][col + 1] !== 0) {
            dir = 'down';
            row++;
          } else {
            col++;
          }
          break;
        case 'down':
          if (row === size - 1 || spiral[row + 1][col] !== 0) {
            dir = 'left';
            col--;
          } else {
            row++;
          }
          break;
        case 'left':
          if (col === 0 || spiral[row][col - 1] !== 0) {
            dir = 'up';
            row--;
          } else {
            col--;
          }
          break;
        case 'up':
          if (row === 0 || spiral[row - 1][col] !== 0) {
            dir = 'right';
            col++;
          } else {
            row--;
          }
          break;
      }
    }
  
    // Replace all even numbers with 0, and odd numbers with 1
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        spiral[i][j] = spiral[i][j] % 2 === 0 ? 0 : 1;
      }
    }
  
    // Set the first row and last column to all 1s
    for (let i = 0; i < size; i++) {
      spiral[0][i] = 1;
      spiral[i][size - 1] = 1;
    }
    console.log(spiral)
    return spiral;
  }
  

  generateSpiral(5)