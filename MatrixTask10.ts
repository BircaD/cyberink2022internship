//An M × N matrix of real numbers is given. 
//Output elements of its columns with odd order numbers (1, 3, …). 
//An output of matrix elements must be performed in the order of columns. 
//Do not use conditional statements.
const myMatrix = [
    [12, 2, 3, 5, 6], 
    [23, 3, 6, 95, 1],
    [6, 25, 80, 2, 4],
];
const myNewMatrix = Array.from({ length: 3 }, (_, index): number[] => []);
for(let i = 0; i < myMatrix.length; i++){
    for (let j = 0; j < Math.trunc(myMatrix[i].length / 2); j++){
        let elem = myMatrix[i][j * 2 + 1];
        myNewMatrix[i].push(elem);
    }
}
console.log(myNewMatrix);