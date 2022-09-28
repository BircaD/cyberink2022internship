//A set A of N points in the coordinate plane is given (points are determined by their coordinates x, y). 
//Find the point of A that lies in the first or the third coordinate quarter and is the nearest to the origin. 
//If the set A does not contain such points then output the origin (0, 0).
const arrayA : Array<number> = [5, 3, 7, 9, 4, 6];
const arrayX : Array<number> = [1, -2, -3, 2, 1, 9];
const arrayY : Array<number> = [0, 9, -1, -4, 9, -9];
let point : number = 0;
let result : number = 0;
for (let i = 0; i < arrayA.length; i++){
    if(arrayX[i] < 0 && arrayY[i] > 0 || arrayX[i] > 0 && arrayY[i] < 0){
        continue;
    }
    if(result === 0){
        result = Math.abs(arrayX[i] + arrayY[i]);
        point = arrayA[i];
    }else if(result > Math.abs(arrayX[i] + arrayY[i])){
        result = Math.abs(arrayX[i] + arrayY[i]);
        point = arrayA[i];
    }
    else if(result < Math.abs(arrayX[i] + arrayY[i])){
        continue;
    }else{
        console.log(0, 0);
    }
    }
console.log(point);