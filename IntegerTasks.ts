//Task 3
//A file size is given in bytes. Find the amount of full Kbytes of this size (1 K = 1024 bytes). Use the operator of integer division.
let a : number = 3050;
console.log(Math.trunc(a / 1024));

//Task 6
//. A two-digit integer is given. Output its left digit (a tens digit) and then its right digit (a ones digit). Use the operator of integer division for obtaining the tens digit and the operator of taking remainder for obtaining the ones digit.
let c : number = 15;
let c1 : number = Math.trunc(c/10);
let c2 : number = c % 10;
console.log(c1, c2);

//Task 9
//A three-digit integer is given. Using one operator of integer division find first digit of the given integer (a hundreds digit).
let d : number = 325;
console.log(Math.trunc(d/100));

//Task 12
// A three-digit integer is given. Output an integer obtained from the given one by reading it from right to left.
let q : number = 639;
let q1 : number = q % 10;
let q2 : number = Math.trunc((q/10)%10);
let q3 : number = Math.trunc(q/100);
console.log(q1*100+q2*10+q3);

//Task 15
//A three-digit integer is given. Output an integer obtained from the given one by exchange a tens digit and a hundreds digit (for example, 123 will be changed to 213).
let r : number = 597;
let r1 : number = r % 10;
let r2 : number = Math.trunc((r/10)%10);
let r3 : number = Math.trunc(r/100);
console.log(r2*100+r3*10+r1);

//Task 18
//An integer greater than 999 is given. Using one operator of integer division and one operator of taking the remainder find a thousands digit of the given integer.
let k : number = 4569;
let k1 : number = k / 1000;
let k2 : number = k1 % 1;
console.log(k1 - k2);

//Task 21
//From the beginning of the day N seconds have passed (N is integer). Find an amount of seconds passed from the beginning of the last minute.
//Nu stiu daca trebuia cu atatea detalii de aceea le comentez
let s : number = 9687;
//let h : number = Math.trunc(s / 3600);
//let m : number = Math.trunc((s % 3600) / 60);
let s1 : number = (s % 60);
//console.log(h, "hours", m, "minutes", s1, "seconds");
console.log(s1);

//Task 24
//Days of week are numbered as: 0 — Sunday, 1 — Monday, 2 — Tuesday, …, 6 — Saturday. An integer K in the range 1 to 365 is given. Find the number of day of week for K-th day of year provided that in this year January 1 was Monday.
let D : number = 31;
let D1 : number = D % 7;
console.log(D1);

//Task 27
//Days of week are numbered as: 1 — Monday, 2 — Tuesday, …, 6 — Saturday, 7 — Sunday. An integer K in the range 1 to 365 is given. Find the number of day of week for K-th day of year provided that in this year January 1 was Saturday.
let H : number = 34;
let H1 : number = ((4 + H) % 7) + 1;
console.log(H1);

//Task 30
//Given a year (as a positive integer), find the respective number of the century. Note that, for example, 20th century began with the year 1901.
let Y : number = 2001;
if (Y % 100 > 0){
    console.log(Math.trunc(Y / 100) + 1, "Century")
}else if (Y % 100 === 0){
    console.log(Math.trunc(Y / 100), "Century")
}
