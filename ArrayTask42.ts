//A real number R and an array of N real numbers are given. Find two adjacent elements whose sum of values is the nearest to the number R and output these elements in ascending order of its indices.
let R : number = 5;
let myArray : Array<number> = [2, 9, 7, 2, 5, 3, 4, 5, 2, 4];
let num1 : number = 0;
let num2 : number = 0;
for (let i = 0; i < myArray.length; i++){
    let temp : number = Math.abs((myArray[i] + myArray[i + 1]) - R);
    let temp2 : number = Math.abs((myArray[i + 1] + myArray[i + 2]) - R);
    if(temp < temp2 ){
        num1 = myArray[i];
        num2 = myArray[i + 1];
    }else if (temp > temp2){
        num1 = myArray[i + 1];
        num2 = myArray[i + 2];
    }
}
console.log('First number is ', num1, 'Second number is ', num2);