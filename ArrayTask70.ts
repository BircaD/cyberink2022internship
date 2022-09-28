//Given an array of N real numbers (N is an even number), exchange values of the first half and the second half of its elements.
const myArray : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp : number = 0;
let half : number = myArray.length / 2;
for (let i = 0; i < half; i++){
       for (let j = myArray.length - 1; j >= half; j--){
        temp = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = temp;
       }
    }

console.log(myArray);