//Task 4
//Given the price of 1 kg of sweets (as a real number), output the cost of 1, 2, …, 10 kg of these sweets.
let price : number = 23;
for(let i = 1; i <= 10; i++){
    console.log(price * i);
}

//Task 8
//Given two integers A and B (A < B), find the product of all integers in the range A to B inclusive.
let A : number = 4,  B : number = 8, prod : number = 1;
for (let i = A; i <= B; i++){
    prod *= i ;   
}
console.log(prod);

//Task 12
//Given an integer N (> 0), find the value of a following product of N factors:
//1.1 · 1.2 · 1.3 · … .
let N : number = 5, Prod : number = 1;
for(let i = 1, factor = 1.1; i <= N; i++, factor += 0.1){
    Prod *= factor
}
console.log(Prod);

//Task 16
//A real number A and an integer N (> 0) are given. Using one loop-statement compute and output powers AK for all integer exponents K in the range 1 to N.
let C : number = 2, E : number = 6;
for (let k = 1; k <= E; k++){
    console.log(C**k);
}

//Task 20
//An integer N (> 0) is given. Using one loop-statement compute the sum
//1! + 2! + 3! + … + N!, where N! (N–factorial) is the product of all integers in the range 1 to N: N! = 1·2·…·N. To avoid the integer overflow, compute the sum using real variables and output the result as a real number.
let num : number = 5, produs : number = 1, sum : number = 0;
for (let i = 1; i <= num; i++){
    produs *= i;
    sum += produs;
}
console.log(sum);

//Task 24
// A real number X and an integer N (> 0) are given. Compute the expression
//1 − X2/(2!) + X4/(4!) − … + (−1)N·X2·N/((2·N)!)
//(N! = 1·2·…·N). The result is an approximate value of cos(X).
let X : number = 4, Num : number = 6;
let Sum = 1, term = 1, fact = 1, Produs = 1, b = 1;

for (let i = 1; i < Num; i++) {
    fact = fact * b * (b + 1);
    Produs = Produs * X * X;
    term = (-1) * term;
    b += 2;
    Sum = Sum + (term * Produs) / fact;
}
console.log(Sum);

//Task 36
//Given positive integers H and K, find the sum 1^K + 2^K + … + H^K.
let sumOfH : number = 1, H : number = 6, K : number = 3;
for (let i = 1; i <= H; i++) {
    sumOfH += Math.pow(i, K);
    console.log(sumOfH);
}

//Task 37
//Given an integer N (> 0), find the sum 1^1 + 2^2 + … + N^N.
let numar : number = 5, sumOfnumar = 0;
for (let i = 1; i <= numar; i++){
    for (let j = i; j <= i; j++){
    sumOfnumar += i**j;
}
}
console.log(sumOfnumar);

//Task 38
//Given an integer P (> 0), find the sum 1^P + 2^P−1 + … + P^1.
let P : number = 6, res : number = 0;
for (let i = 1, j = P; i <= P; i++, j--){
    res += i**j;
}
console.log(res)
