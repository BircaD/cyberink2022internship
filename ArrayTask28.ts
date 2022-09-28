//Given an array A of N real numbers, find the minimum among elements with even order numbers: A2, A4, A6, … .
const myArray : Array<number> = [100, 6, 5, 78, 23, 10, 45];
let minNum = myArray[0];
for (let i = 2; i < myArray.length; i += 2){
    if (minNum > myArray[i]){
        minNum = myArray[i]
    }
}
    console.log(minNum);