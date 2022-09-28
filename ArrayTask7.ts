//Given an array of N real numbers, output its elements in inverse order.
const myArray: Array<number> = [1, 2, 3, 4, 5, 6, 7];
const myReverseArray : Array<number> = [];
    for (let i = myArray.length - 1; i >= 0; i--){
        myReverseArray.push(myArray[i]);
    }
    console.log(myArray);
    console.log(myReverseArray);
    