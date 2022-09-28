//Given an array of N integers, increase each series of equal numbers of the array by one element
const myArray : Array<number> = [1, 2, 2, 3, 4, 4, 4, 5];
const myNewArray : Array<number> = [];
for (let i = 0; i < myArray.length; i++){
    myNewArray.push(myArray[i]);
    if (myArray[i] != myArray[i + 1]){
        myNewArray.push(myArray[i]);
    }else if (myArray[i] === myArray[i + 1]){
        continue;
    }
}
console.log(myNewArray);