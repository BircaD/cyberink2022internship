//An array A of N (≤ 6) real numbers is given. Sort the array in ascending order by using the exchange sort method (the bubble sorting): 
//compare each pair of two adjacent elements (A1 and A2, A2 and A3, and so on) and exchange their values in case the left element is greater than the right one; repeat N − 1 times such array pass. 
//Output all array elements after each pass for checking results. 
//Note that the amount of analyzed pairs of the array elements can be reduced by 1 after each pass.
const arrayA : Array<number> = [5, 2, 8, 1, 4, 3];
let temp : number = 0;
for (let j = 0; j < arrayA.length - 1; j++){
for (let i = 0; i < arrayA.length; i++){
    if(arrayA[i] > arrayA[i + 1]){
        temp = arrayA[i];
        arrayA[i] = arrayA[i + 1];
        arrayA[i + 1] = temp;
        console.log(arrayA[i], arrayA[i + 1])
    }
}
}
console.log('sorted array = ', arrayA);