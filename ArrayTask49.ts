//An array of N integers is given. If the array is a permutation (i. e., if the array contains all integers in the range 1 to N) then output 0, 
//otherwise output the order number of the first inadmissible element.
let myArray : Array<number> = [1, 2, 3, 4, 5, 6];
let n : number = myArray.length;
let myArrayCheck : Array<number> = [];
for (let i = 0; i < myArray.length; i++){
    if(myArray[i] + 1 === myArray[i + 1]){
    myArrayCheck.push(myArray[i]);
    continue;
    }else if(myArray[i] === myArray.length){
        console.log(0);
        break;
    }else if(myArray[i] + 1 != myArray[i + 1]){
        console.log(myArray[i]);
        break;
    }
}

/*if (myArrayCheck.length === n){
    console.log(0);
    console.log(myArray);
    console.log(myArrayCheck);
}else if(myArrayCheck.length !== n){
    console.log(1);
    console.log(myArray);
    console.log(myArrayCheck);
}*/
