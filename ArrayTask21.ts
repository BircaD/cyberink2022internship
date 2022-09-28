//An array of N real numbers and two integers K and L (1 ≤ K ≤ L ≤ N) are given. 
//Find the average of array elements with the order numbers in the range K to L inclusively.

const myArray : Array<number> = [1, 2, 3, 6, 8, 4, 5, 7];
let K : number = 2;
let L : number = 5;
let sum : number = 0;
let result : number = 0;
for (let i = K; i <= L; i++){
    sum += myArray[i];
    result = sum / 2;
}
console.log(result);
