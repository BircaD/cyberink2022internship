//Task 5
//Three integers are given. Find the amount of positive and amount of negative integers in the input data.
let a : number = 1, b : number = -5, c : number = 3;
let case1 = a>=0 && b>=0 && c>=0;
let case2 = (a<0 && b>=0 && c>=0) || (a>=0 && b<0 && c>=0) || (a>=0 && b>=0 && c<0);
let case3 = (a<0 && b<0 && c>=0) || (a<0 && b>=0 && c<0) || (a>=0 && b<0 && c<0);
if (case1){
    console.log("3 numere pozitive")
}else if (case2){
    console.log("2 numere pozitive si 1 numar negativ")
}else if(case3){
    console.log("2 numere negative si 1 numar pozitiv")
}else{
    console.log("3 numere negative")
}

//Task 10
//The values of two integer variables A and B are given. If the values are not equal then assign the sum of given values to each variable, otherwise assign zero value to each variable. Output the new values of the variables A and B.
let A : number = 5, B : number = 5;
if(A != B){
    A += B
    B = A
    console.log(A, B)
}else{
    A = 0
    B = A
    console.log(A, B)
}

//Task 15
//Given three real numbers, output the sum of two largest values.
let q : number = 2, w : number = 2, e : number = 8;
let c1 = q < w && q < e;
let c2 = w < q && w < e;
let c3 = e < q && e < w;
if (c1){
    console.log(w + e, "w and e are the largest numbers ")
}else if(c2){
    console.log(q + e, "q and e are the largest numbers")
}else if(c3){
    console.log(q + w, "q and w are the largest numbers")
}else{
    console.log("There are no 2 largest numbers")
}

//Task 20
//Three points A, B, C on the real axis are given. Determine whether B or C is closer to A. Output the nearest point and its distance from A.
let A1 : number = 2, B1 : number = 4, C1 : number = 8;
let firstCase = Math.abs(B1 - A1) < Math.abs(C1 - A1)
let secondCase = Math.abs(C1 - A1) < Math.abs(B1 - A1)
if(firstCase){
    console.log(Math.abs(B1 - A1), "B is closer to A")
}else if(secondCase){
    console.log(Math.abs(C1 - A1), "C is closer to A")
}else{
    console.log(Math.abs(B1 - A1), Math.abs(C1 - A1), "B and C are at the same distance to A")
}

//Task 25
//Given an integer independent variable x, find the value of an integer function f defined as:
//f(x)	 = 	2·x,	if x < −2 or x > 2,  −3·x	otherwise.
let x : number = 1
let cOne = x < -2 || x > 2
if (cOne){
    console.log(2 * x)
}else{
    console.log(-3 * x)
}

//Task 30
//An integer in the range 1 to 999 is given. Output its description string as: "two-digit even number", "three-digit odd number", etc.
let i : number = 77
let caseOne = (i >= 100) && (i % 2 == 0)
let caseTwo = (i >= 100) && (i % 2 != 0)
let caseThree = i < 100 && i > 10 && (i % 2 == 0)
let caseFour = i < 100 && i > 10 && (i % 2 != 0)
let caseFive = i <= 9 && (i % 2 == 0)
if(caseOne){
    console.log("three-digit even mumber")
}else if(caseTwo){
    console.log("three-digit odd number")
}else if(caseThree){
    console.log("two-digit even number")
}else if(caseFour){
    console.log("two-digit odd number")
}else if(caseFive){
    console.log("one-digit even number")
}else{
    console.log("one-digit odd number")
}

