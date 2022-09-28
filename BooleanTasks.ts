//Task 8
//Given two integers A and B, verify the following proposition: "Each of the numbers A and B is odd"
let a : number = 5, b : number = 3;
console.log(a % 2 != 0 && b % 2 != 0)

//Task 16
//Given a positive integer, verify the following proposition: "The integer is a two-digit even number".
let c : number = 18;
console.log(c >= 10)

//Task 24
//Three real numbers A, B, C are given (A is not equal to 0). By means of a discriminant D = B2 − 4·A·C, verify the following proposition: "The quadratic equation A·x2 + B·x + C = 0 has real roots".
let A : number = 3, B : number = -6, C : number = 2;
let D : number = B**2 - 4 * A * C;
console.log(D >=0, "Real roots" );

//Task 32
//Given three integers a, b, c that are the sides of a triangle, verify the following proposition: "The triangle with sides a, b, c is a right triangle".
let a1 : number = 8, b1 : number = 15, c1 : number = 17
console.log(a1**2 + b1**2 === c1**2)

