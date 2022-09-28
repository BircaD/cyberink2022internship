//An array A of N (≤ 15) integers is given. 
//Write elements of A with order numbers that are multiples of 3 (3, 6, …) to a new array B and output the size of array B and all its elements. 
//Do not use conditional statements.
const arrayA : Array<number> = [1, 3, 5, 9, 8, 7, 12, 15];
const arrayB : Array<number> = [];
for (let i = 0; i < arrayA.length; i++){
    while(arrayA[i] % 3 === 0){
        arrayB.push(arrayA[i]);
        break;
    }
}
console.log('arrayB = ', arrayB, 'arrayB length = ',  arrayB.length);