//Task 4
//Write a real-valued function RingS(R1, R2) that returns the area of a ring bounded by a concentric circles of radiuses R1 and R2 (R1 and R2 are real numbers, R1 > R2). 
//Using this function, find the areas of three rings with given outer and inner radiuses. 
//Note that the area of a circle of radius R can be found by formula S = π·R2. Use 3.14 for a value of π.
let S : number = 0;
let p : number = 3.14;

function RingS (R1 :number, R2 : number): number{
    S = p * (R1**2 - R2**2);
    return S;
}

let r1 = 10, r2 = 5;
console.log('r1 = ', r1, ' r2 = ', r2, ' result = ', RingS(r1, r2));
r1 = 26;
r2 = 20;
console.log('r1 = ', r1, ' r2 = ', r2, ' result = ', RingS(r1, r2));
r1 = 12;
r2 = 3;
console.log('r1 = ', r1, ' r2 = ', r2, ' result = ', RingS(r1, r2));

//Task 8
//Write an integer function Quarter(x, y) that returns the number of a coordinate quarter containing a point with nonzero real-valued coordinates (x, y). 
//Using this function, find the numbers of coordinate quarters containing each of three points with given nonzero coordinates.
function Quarters(x : number, y : number): number {
    if (x > 0 && y > 0){
        return 1;
    }else if(x < 0 && y > 0){
        return 2;
    }else if (x < 0 && y < 0){
        return 3;
    }else if (x > 0 && y < 0){
        return 4;
    }else {
        return -1;
    } 
}
let x1 : number = 5, y1 : number = 3;
console.log(' x1 = ', x1, ' y1 = ', y1, 'quadrant = ', Quarters(x1, y1));
x1 = -5, y1 = 3;
console.log(' x1 = ', x1, ' y1 = ', y1, 'quadrant = ', Quarters(x1, y1));
x1 = -5, y1 = -3;
console.log(' x1 = ', x1, ' y1 = ', y1, 'quadrant = ', Quarters(x1, y1));
x1 = 5, y1 = -3;
console.log(' x1 = ', x1, ' y1 = ', y1, 'quadrant = ', Quarters(x1, y1));

//Task 12
//Write a logical function IsPowerN(K, N) that returns True, if an positive integer parameter K is equal to N (> 1) raised to some integer power, and False otherwise. 
//Having input an integer N (> 1) and a sequence of 10 positive integers and using this function, find the amount of powers of base N in the given sequence.
function IsPowerN(K : number, N : number): boolean{
    if (K === N**power){
        return true;
    }else{
        return false;
    }
}

let k : number = 25, n : number = 5, power : number = 2;
console.log('k = ', k, 'n = ', n, 'result = ', IsPowerN(k, n));
k = 125; 
n = 5;
power = 3;
console.log('k = ', k, 'n = ', n, 'result = ', IsPowerN(k, n));
k = 48;
n = 7;
power = 2;
console.log('k = ', k, 'n = ', n, 'result = ', IsPowerN(k, n));
//Task 16
//Write a logical function IsPalindrome(K) that returns True, if the decimal representation of a positive parameter K is a palindrome 
//(i. e., it is read equally both from left to right and from right to left), and False otherwise. 
//Using this function, find the amount of palindromes in a given sequence of 10 positive integers. 
function IsPalindrome(K : number ) : boolean {
    let reverseNum : number = 0;
    let temp : number = a;
    while(temp != 0){
        reverseNum = (reverseNum * 10) + (temp % 10)
        temp = Math.trunc(temp / 10);
    }
    if (reverseNum === K){
        return true;
    }else {
        return false;
    }
}  
let a : number = 12521;
console.log('a = ', a, 'result = ', IsPalindrome(a));
a = 1202;
console.log('a = ', a, 'result = ', IsPalindrome(a));

//Task 20
//Write a real-valued function Fact2(N) that returns a double factorial N!!:
//N!! = 1·3·5·…·N,    if N is an odd number;    N!! = 2·4·6·…·N    otherwise
let res : number = 1;
function Fact2(N : number) : number{
    if (N === 0 || N === 1){
        return res;
    }else{
        return N * Fact2(N - 2)
    }
}
let m : number = 5;
console.log('m = ', m, 'result = ', Fact2(m));

//Task 40
//Write a real-valued function Exp1(x, ε) (x and ε are real numbers, ε > 0) that returns an approximate value of the function exp(x) defined as follows:
//exp(x) = 1 + x + x2/(2!) + x3/(3!) + … + xn/(n!) + …  (n! = 1·2·…·n). 
//Stop adding new terms to the sum when the value of the next term will be less than ε. 
//Using this function, find the approximate values of the function exp(x) at a given point x for six given ε.

function exp1(x: number, epsilon: number): number {
    let previous = 0;
    let current = 1;
    let factorial: number = 1;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        factorial *= i;
        previous = current;
        current += x**i / factorial;
        i++;
    }
    return current;
}

let b : number = 2/5, s : number = 0.1;
console.log('b = ', b, 's = ', s, 'result = ', exp1(b, s));
b = 2/5, s = 0.01;
console.log('b = ', b, 's = ', s, 'result = ', exp1(b, s));
b = 2/5, s = 0.0001;
console.log('b = ', b, 's = ', s, 'result = ', exp1(b, s));
console.log(Math.exp(2/5));

//Task 41
//Write a real-valued function Sin1(x, ε) (x and ε are real numbers, ε > 0) that returns an approximate value of the function sin(x) defined as follows:
//sin(x) = x − x3/(3!) + x5/(5!) − … + (−1)n·x2·n+1/((2·n+1)!) + … .
//Stop adding new terms to the sum when the absolute value of the next term will be less than ε. 
//Using this function, find the approximate values of the function sin(x) at a given point x for six given ε.
function sin1(x : number, epsilon : number) : number{
    let previous : number= -10;
    let current : number = x;
    let factorial: number = 1;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        factorial *= 2 * i + 1;
        previous = current;
        current += ((-1)**i) * x**(2 * i + 1) / factorial;
        i++;
    }
    return current;
}
let h : number = 2/5, d : number = 0.1;
console.log('h = ', h, 'epsilon = ', d, 'result =', sin1(h, d));
console.log(Math.sin(2/5));

//Task 42
//Write a real-valued function Cos1(x, ε) (x and ε are real numbers, ε > 0) that returns an approximate value of the function cos(x) defined as follows:
//cos(x) = 1 − x2/(2!) + x4/(4!) − … + (−1)n·x2·n/((2·n)!) + … .
//Stop adding new terms to the sum when the absolute value of the next term will be less than ε. 
//Using this function, find the approximate values of the function cos(x) at a given point x for six given ε.
function cos1(x : number, epsilon : number) : number{
    let previous : number= -10;
    let current : number = 1;
    let factorial: number = 1;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        factorial *= 2 * i;
        previous = current;
        current += ((-1)**i) * x**(2 * i) / factorial;
        i++;
    }
    return current;
}
let l : number = 2/5, j : number = 0.1;
console.log('x = ', l, 'epsilon = ', j, 'result =', cos1(l, j));
console.log(Math.cos(2/5));

//Task 43
//Write a real-valued function Ln1(x, ε) (x and ε are real numbers, |x| < 1, ε > 0) that returns an approximate value of the function ln(1 + x) defined as follows:
//ln(1 + x) = x − x2/2 + x3/3 − … + (−1)n·xn+1/(n+1) + … .
//Stop adding new terms to the sum when the absolute value of the next term will be less than ε. 
//Using this function, find the approximate values of the function ln(1 + x) at a given point x for six given ε.
function ln1(x : number, epsilon : number) : number{
    let previous : number= -10;
    let current : number = x;
    let factorial: number = 1;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        //factorial += i;
        previous = current;
        current += (((-1)**i) * x**(i + 1))/ (i + 1);
        i++;
    }
    return current;
}
let f : number = 2/5, z : number = 0.00001;
console.log('x = ', f, 'epsilon = ', z, 'result =', ln1(f, z));
console.log(Math.log(1 + f));

//Task 44
//Write a real-valued function Atan1(x, ε) (x and ε are real numbers, |x| < 1, ε > 0) that returns an approximate value of the function atan(x) defined as follows:
//atan(x) = x − x3/3 + x5/5 − … + (−1)n·x2·n+1/(2·n+1) + … .
//Stop adding new terms to the sum when the absolute value of the next term will be less than ε. 
//Using this function, find the approximate values of the function atan(x) at a given point x for six given ε.
function atan1(x : number, epsilon : number) : number{
    let previous : number= -10;
    let current : number = x;
    let factorial: number = 1;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        //factorial += i;
        previous = current;
        current += (((-1)**i) * x**( 2 * i + 1))/ (2 * i + 1);
        i++;
    }
    return current;
}
let g : number = 1, u : number = 0.1;
console.log('x = ', g, 'epsilon = ', u, 'result =', atan1(g, u));
console.log(Math.atan(g));

//Task 45
//Write a real-valued function Power4(x, a, ε) (x, a, ε are real numbers, |x| < 1, a, ε > 0) that returns an approximate value of the function (1 + x)a defined as:
//(1 + x)a = 1 + a·x + a·(a−1)·x2/(2!) + … + a·(a−1)·…·(a−n+1)·xn/(n!) + … .
//Stop adding new terms to the sum when the absolute value of the next term will be less than ε. 
//Using this function, find the approximate values of the function (1 + x)a at a given point x for a given exponent a and six given ε.
function power4(x : number, a : number, epsilon : number) : number {
    let previous : number= -10;
    let current : number = x;
    let factorial: number = 1;
    let i: number = 1;
    while(Math.abs(current - previous) >= epsilon) {
        factorial *= i;
        previous = current;
        current += (a * (a -  1) * ( a - i + 1) * x**i)/ factorial;
        i++;
        console.log(current);
    }
    return current;
}
let x2 : number = 0.5, a1 : number = 2, ep : number = 0.1;
console.log('x = ', x1, 'a = ', a1, 'epsilon = ', ep, 'result =', power4(x1, a1, ep));
console.log((1 + x1)**a1);

//Task 46
//Write an integer function GCD2(A, B) that returns the greatest common divisor (GCD) of two positive integers A and B. Use the Euclidean algorithm:
//GCD(A, B) = GCD(B, A mod B),    if B ≠ 0;        GCD(A, 0) = A,
//where "mod" denotes the operator of taking the remainder after integer division. 
//Using this function, find the greatest common divisor for each of pairs (A, B), (A, C), (A, D) provided that integers A, B, C, D are given.
function gcd(A : number, B : number) : number {
    let res : number = 1;
    let temp : number = 0;
    while (A || B !== 0){  
        if(A === 0){
            res = B;
            break;
        }else if(B === 0) {
            res = A;
            break;
        }else if(A > B){
            temp = A;
            A = B;
            B = temp % B;
        }else if(A < B){
            temp = B;
            B = A;
            A = temp % A;
}
}
return res;
}
let A1 : number = 24, B1 : number = 148;
console.log('A = ', A1, 'B = ', B1, 'result = ', gcd(A1, B1));

//Task 48
//Taking into account that the least common multiple of two positive integers A and B equals A·(B/GCD(A, B)), where GCD(A, B) is the greatest common divisor of A and B, 
//and using the GCD2 function from the task Func46, write an integer function LCM2(A, B) that returns the least common multiple of A and B.
//Using this function, find the least common multiple for each of pairs (A, B), (A, C), (A, D) provided that integers A, B, C, D are given.
function lcm(A : number, B : number) : number{
    let res : number = 0;
    res = A * (B / gcd(A, B));
    return res;
}
console.log('A = ', A1, 'B = ', B1, 'gcd = ', gcd(A1, B1), 'lcm = ', lcm(A1, B1));

//Task 49
//Taking into account the formula GCD(A, B, C) = GCD(GCD(A, B), C) and using the GCD2 function from the task Func46,
//write an integer function GCD3(A, B, C) that returns the greatest common divisor of three positive integers A, B, C. 
//Using this function, find the greatest common divisor for each of triples (A, B, C), (A, C, D), (B, C, D) provided that integers A, B, C, D are given.
function gcd3(A : number, B : number, C : number) : number {
    let res : number = 0;
    let temp : number = 0;
    let D : number = gcd(A, B);
    while (D || C !== 0){  
        if(D === 0){
            res = C;
            break;
        }else if(C === 0) {
            res = D;
            break;
        }else if(D > C){
            temp = D;
            D = C;
            C = temp % C;
        }else if(D < C){
            temp = C;
            C = D;
            D = temp % D;
}
}
    return res;
}
let C1 : number = 36; 
console.log('A = ', A1, 'B = ', B1, 'C = ', C1, 'gcd = ', gcd(A1, B1), 'gcd3 = ', gcd3(A1, B1, C1));

//Task 50
//Write a function TimeToHMS(T) that converts a time interval T (in seconds) into the "hours H, minutes M, seconds S" format and returns the values H, M, S (T, H, M, S are integers). 
//Using this function, find the amount of hours, minutes and seconds for each of five given time intervals T1, T2, …, T5.
function timeToHMS(T : number){
    let hours : number = Math.trunc(T / 3600);
    let minutes : number = Math.trunc((T % 3600) / 60);
    let seconds : number = (T % 3600) % 60;
    return {H : hours, M : minutes, S : seconds}
}
let T1 : number = 13786;
console.log('result = ', timeToHMS(T1));
T1 = 17275;
console.log('result = ', timeToHMS(T1));

//Task 51
//Write a function IncTime(H, M, S, T) that increases a time interval in hours H, minutes M, seconds S on T seconds and returns new values of hours, minutes, and seconds (all numbers are positive integers). 
//Having input hours H, minutes M, seconds S (as integers) and an integer T and using the IncTime function, increase the given time interval on T seconds and output new values of H, M, S.
function incTime(H : number, M : number, S : number, T : number){
    let totalTime : number = H * 3600 + M * 60 + S + T;
    let hours : number = Math.trunc(totalTime / 3600);
    let minutes : number = Math.trunc((totalTime % 3600) / 60);
    let seconds : number = (totalTime % 3600) % 60;
    return {H : hours, M : minutes, S : seconds};
}
let H1 : number = 3, M1 : number = 49, S1 : number = 46, T2 : number = 3489;
console.log('result = ', incTime(H1, M1, S1, T2));
