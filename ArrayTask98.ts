//Given an array of N integers, remove all elements whose values appear less than three times in the array. 
//Output the size of the changed array and all its elements.
const myArray : Array<number> = [1, 2, 2, 2, 3, 4];
const myNewArray : Array<number> = [];
for ( let i = 0; i < myArray.length ;i++) {
    let count = 1;
    for (let j = 0; j < myArray.length; j++) {
        if (myArray[i] === myArray[j]) {
            count++;
        }
    }
    if (count >= 3) {
        myNewArray.push(myArray[i]);
    }
}
console.log(myNewArray);
    
    
    
    
    
    
    
    
    
    
    
    /*if(myArray[i] != myArray[i + 1]){
        continue;
    }
    while(myArray[i] === myArray[i + 1]){
        count++;
    }
    if(count < 2){
        count = 0;
    }else{
    
    }
    }

console.log(count);*/