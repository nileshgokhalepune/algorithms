const rotateImage = (matrix) =>{
    console.log(matrix);
    transpose(matrix);
    console.log(matrix);
}

const transpose = (matrix) => {
  let  n = matrix.length;
  for(let i=0; i< n; i++){
    for(let j=i; j< n;j++){
        let temp = matrix[j][i];
        matrix[j][i] = matrix[i][j];
        matrix[i][j] = temp;
    }
  }
}
const array2d = [[]];
let row=5, col=5;
let k = 1;
for(let i=0; i < row;i++){
    array2d[i] = new Array(5);
    for(let j=0; j < col;j++){
        array2d[i][j] = k++;
    }
}
//console.log(array2d);
rotateImage(array2d)