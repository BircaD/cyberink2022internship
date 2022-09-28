// Two arrays A and B of 5 real numbers are given. Values of elements of each array are in ascending order. 
//Write all elements of A and B to a new array C (of size 10) so that values of all elements of C were in ascending order.
const arrayA : Array<number> = [10, 12, 23, 28, 113];
const arrayB : Array<number> = [4, 6, 9, 11, 122];
const arrayC : Array<number> = [];
let temp : number = 0;
for (let i = 0; i < arrayA.length; i++){
        arrayC.push(arrayA[i]);
        arrayC.push(arrayB[i]);
}
for(let i = 0; i < arrayC.length; i++){
    for (let j = i + 1; j < arrayC.length; j++)
            if(arrayC[i] > arrayC[j]){
                temp = arrayC[i];
                arrayC[i] = arrayC[j];
                arrayC[j] = temp;
            }
        }
    console.log(arrayC);
