//Given an array of N real numbers, perform the left cyclic shift of array elements on one position 
//by assigning initial values of AN, AN−1, …, A2, A1 to elements AN−1, AN−2, …, A1, AN respectively.
const myArray : Array<number> = [1, 2, 3, 4, 5, 6, 7];
let temp : number = 0
for (let i = myArray.length - 1; i > 0; i--){
    temp = myArray[i];
    myArray[i] = myArray[i - 1];
    myArray[i - 1] = temp;
}
console.log(myArray);