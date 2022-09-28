//An array A of N real numbers is given. Output array elements with even order numbers (in ascending order of indices) and then output array elements with odd order numbers (in ascending order of indices too):
//A2,    A4,    A6,    …,    A1,    A3,    A5,    … .
//Do not use conditional statements.
const A : Array<number> = [12, 23, 13, 84, 15, 96, 37, 8]; 
for (let i = 0, j = 1; i < A.length; i = i + 2, j = j + 2){
    console.log('Even order numbers elements = ', A[i]);
    console.log('Odd order numbers elements = ', A[j]);
}
