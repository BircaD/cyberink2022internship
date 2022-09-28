//An array of N real numbers and two integers K and L (1 ≤ K < L ≤ N) are given. 
//Remove elements with the order numbers in the range K to L inclusively 
//from the array and output the size of the changed array and all its elements.
const myArray : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
let K : number = 2;
let L : number = 5;
const myNewArray : Array<number> = [];
for(let i = 0; i < myArray.length; i++){
    if(i >= K && i <= L){
        continue;
    }else{
    myNewArray.push(myArray[i]);
}
}
console.log(myNewArray, 'myNewArray lenght = ', myNewArray.length);