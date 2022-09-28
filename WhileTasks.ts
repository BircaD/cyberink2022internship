//Task 6 
//Given an integer N (> 0), compute the double factorial of N:  N!! = N·(N−2)·(N−4)·…,
//where the last factor equals 2 if N is an even number, and 1 otherwise. 
//To avoid the integer overflow, compute the double factorial using a real variable and output the result as a real number.
let myNum = 6;
let doubleFact = 1;
while(myNum > 0){
    for (let i = myNum; i > 0; i-2){
        doubleFact = myNum * (myNum - 2);
    }
    console.log(doubleFact);
}



//Task 9
//Given an integer N (> 1), find the smallest integer K such that the inequality 3^K > N is fulfilled.
let N : number = 28, K : number = 0;
while(3**K < N){
    K++;
}
console.log(K);

//Task 12
// An integer N (> 1) is given. Find the largest integer K such that the sum 1 + 2 + … + K is less than or equal to N. Output K and the corresponding sum.
let A : number = 10, B : number = 1, sumOfB = 0;
while (sumOfB < A){
    sumOfB += B;
    B++;
    if(sumOfB == A){
        B--;
    break;
}
}
console.log(B, sumOfB);


//Task 15
//A principal of 1000 euro is invested at a rate of P percent compounded annually. 
//A real number P is given, 0 < P < 25. 
//Find, how many years K it will take for an investment to exceed 1100 euro. 
//Output K (as an integer) and the compound amount S of the principal at the end of K years (as a real number).
let principal : number = 1000, P : number = 7, numOfYears : number = 0, capPrincipal : number = 1100.
let percent : number = 0;
while(principal < capPrincipal){
    percent = (principal / 100) * P;
    principal += percent;
    numOfYears++;

}
console.log( `principal ${principal}`, `numOfYears ${numOfYears}`);

//Task 18
//Given an integer N (> 0), find the amount and the sum of its digits. 
//Use the operators of integer division and taking the remainder after integer division.
let numar : number = 12512;
let sumOfDigits : number = 0;
let amountOfDigits : number = 0;
while ( numar != 0){
    sumOfDigits += numar % 10;
    numar = Math.trunc(numar / 10);
    amountOfDigits++;

}
console.log(amountOfDigits, sumOfDigits);

//Task 21
//An integer N (> 0) is given. 
//Determine whether its decimal representation contains odd digits or not, and output True or False respectively. 
//Use the operators of integer division and taking the remainder after integer division.
let myNumber : number = 30;
let hasOddDigits : boolean = true;
let hasntOddDigits : boolean = false;
let divToTen = Math.trunc(myNumber / 10);
let myNumRes = myNumber % 10

while( myNumber != 0) {
    if (divToTen > 0 && myNumRes % 2 != 0){
        console.log(hasOddDigits);
    }else if(divToTen > 0 && myNumRes % 2 === 0){
        console.log(hasntOddDigits);
    }else if (divToTen == 0 && myNumRes == 0){
        break;
    }else if( divToTen == 0 && myNumRes != 0){
        console.log(hasOddDigits);
        break;
    }
    myNumber = divToTen;
    myNumRes = divToTen % 10;
    divToTen = Math.trunc(divToTen / 10);   
}

//Task 24
//An integer N (> 1) is given. An integer-valued sequence of the Fibonacci numbers FK is defined as:
//F1 = 1,   F2 = 1,   FK = FK−2 + FK−1,    K = 3, 4, … .
//Determine whether N is a Fibonacci number or not, and output True or False respectively.
let givenNumber : number = 8, givenK : number = 3;
let fib : number = (givenK - 2) + (givenK - 1);
let temp : number = 0;
while(givenNumber != fib){
    temp = fib;
    givenK++;
    fib = (givenK - 2) + (givenK - 1);
    if(givenNumber == fib){
        console.log(true);
        break;
    }else if(givenNumber < fib){
        console.log(false)
        break;
    }
}

