//Given an array of N real numbers, 
//replace each local minimum with its square (an array element is called the local minimum if it is smaller than its neighbors).
const myArray : Array<number> = [2, 3, 2, 5, 2, 8, 9];

for (let i = 0; i < myArray.length; i++){
    if (i === 0 && myArray[i] < myArray[i + 1]){
        myArray[i] = myArray[i]**2;
        continue;
    }
    if(i === myArray.length - 1 && myArray[i] < myArray[i - 1]){
        myArray[i] = myArray[i]**2;
        continue;
    }
    if(myArray[i] < myArray[i - 1] && myArray[i] < myArray[i + 1]){
        myArray[i] = myArray[i]**2;
        continue;
    }
}
console.log(myArray);