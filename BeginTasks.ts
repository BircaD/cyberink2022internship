//Task 4
//Given the diameter d of a circle, find the length L of the circle: L = π·d. Use 3.14 for a value of π.
let d: number = 5, p: number = 3.14;
let L = p * d;
console.log(L);

//Task 8
//Given two numbers a and b, find their average: (a + b)/2.
let a: number = 5, b: number = 2;
console.log((a + b) / 2);

//Task 12
//The legs a and b of a right triangle are given. Find the hypotenuse c and the perimeter P of the triangle: c = (a2 + b2)1/2, P = a + b + c.
let a1: number = 5, b1: number = 7;
let c = (5 ** 2 + 7 ** 2) ** (1 / 2);
let P = a1 + b1 + c;
console.log(P);

//Task 16
//Two points with the coordinates x1 and x2 are given on the real axis. Find the distance between these points: |x2 − x1|.
let x1: number = -10, x2: number = 5;
console.log(Math.abs(x2 - x1));

//Task 20
//The coordinates (x1, y1) and (x2, y2) of two points are given. Find the distance between the points:((x2 − x1)**2 + (y2 − y1)**2)**1/2.
let z1: number = 2, y1: number = 4, z2: number = 6, y2: number = 8;
console.log(Math.sqrt((z2 - z1) ** 2 + (y2 - y1) ** 2));

//Task 24
//Variables A, B, C are given. Change values of the variables by moving the given value of A into the variable C, the given value of C into the variable B, and the given value of B into the variable A. Output the new values of A, B, C.
let A: number = 1, B: number = 2, C: number = 3;
let temp = A;
A = C;
C = B;
B = temp;
console.log(A, B, C);

//Task 28
// Given a number A, compute a power A15 using five multiplying operators for computing A2, A3, A5, A10, A15 sequentially. Output all obtained powers of the number A.
let N: number = 2;
N ** 2 == N * N
console.log(N ** 2)

N ** 3 == N ** 2 * N
console.log(N ** 3)

N ** 5 == N ** 2 * N ** 3
console.log(N ** 5)

N ** 10 == N ** 2 * N ** 3 * N ** 5
console.log(N ** 10)

N ** 15 == N ** 5 * N ** 10
console.log(N ** 15)

//Task 32
//A centigrade temperature T is given. Convert it into a Fahrenheit temperature. The centigrade temperature TC and the Fahrenheit temperature TF are connected as:TC = (TF − 32)*5/9.
let Tc: number = 50;
let Tf = 32 + ((9 / 5) * Tc);
console.log(Tf);

//Task 36
//The velocity of the first car is V1 km/h, the velocity of the second car is V2 km/h, the initial distance between the cars is S km. Find the distance between the cars after T hours provided that the distance is increasing. The required distance is equal to a sum of the initial distance and the total distance covered by the both cars (total distance = time · total velocity).
let V1: number = 35, V2: number = 45, S: number = 12, T: number = 4;
let totalDistance = T * (V1 + V2);
S += totalDistance;
console.log(S);

//Task 40
// Solve a system of linear equations
// A1·x + B1·y = C1,
// A2·x + B2·y = C2
// with given coefficients A1, B1, C1, A2, B2, C2 provided that the system has the only solution. Use the following formulas:
// x = (C1·B2 − C2·B1)/D,   y = (A1·C2 − A2·C1)/D,
// where D = A1·B2 − A2·B1.
let A1 = 3, A2 = 4, B1 = 2, B2 = 5, C1 = 6, C2 = 7;
let D = A1 * B2 - A2 * B1;
let x = (C1 * B2 - C2 * B1) / D;
let y = (A1 * C2 - A2 * C1) / D;
let res1 = A1 * x + B1 * y == C1;
let res2 = A2 * x + B2 * y == C2;
console.log(res1, res2);
