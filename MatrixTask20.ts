//An M × N matrix of real numbers is given. 
//Find the product of elements for each matrix column.
const myMatrix = [
    [2, 3, 4,],
    [2, 3, 5,],
    [5, 2, 0,],
];
const myNewMatrix = Array.from({ length: 3 }, (_, index): number[] => []);
let prod : number = 1;

for (let i = 0; i < myMatrix.length; i++){
    for (let j = 0; j < myMatrix[i].length; j++){
            prod *= myMatrix[j][i];
        }
        myNewMatrix[i].push(prod);
        prod = 1;
    }
console.log(myNewMatrix);