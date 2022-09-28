//An array of N real numbers and two integers K and M (1 ≤ K ≤ N, 1 ≤ M ≤ 10) are given. 
//Insert M new elements with zero value after an element with the order number K.
const arrayN : Array<number> = [1, 2, 3, 4, 5, 6, 7];
let K : number = 3;
let M : number = 6;
let newElem : number = 0;
let count : number = 0;
const arrayM : Array<number> = [];
for (let i = 0; i < arrayN.length; i++){
    arrayM.push(arrayN[i]);
    if(i === K){
        do{
            arrayM.push(newElem);
            count++;
    }while(count < M)
}
}
console.log(arrayM);