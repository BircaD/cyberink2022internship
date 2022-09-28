//Task 4
//A number of month is given (as an integer in the range 1 to 12): 1 — January, 2 — February, etc. Output the amount of days in the month for a non-leap year.
let m : number = 11
switch(m){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("31 days");
    break;
    case 4: case 6: case 9: case 11:
    console.log("30 days")
    break;
    case 2:
    console.log("28 days")
    break;
}

//Task 8
//Given two integers D (day) and M (month) representing a correct date of a non-leap year, output values D and M for the previous date.
let day : number = 1, month : number = 6;
switch(month){
    case 1: 
    if (day === 1){
        day = 31;
        month = 12;
        console.log(day, month);
        }else if(day > 1){
        day -= 1;
        console.log(day, month);
        }
        break;
    case 2: case 5: case 7: case 8: case 10: case 12:
        if (day === 1){
            day = 30;
            month -= 1;
            console.log(day, month);
        }else if( day > 1){
            day -= 1;
            console.log(day, month);
        }
        break;
    case 3:
        if(day === 1){
            day = 28;
            month -= 1;
            console.log(day, month);
        }else if(day > 1){
            day -= 1;
            console.log(day, month);
        }
        break;
    case 4: case 6: case 9: case 11:
        if(day === 1){
            day = 31;
            month -= 1;
            console.log(day, month);
        }else if(day > 1){
            day -= 1;
            console.log(day, month);
        }
        break;
    default:
        console.log("error");
}


//Task 12
//Elements of a circle are numbered as: 1 — radius R, 2 — diameter D = 2·R, 3 — length L = 2·π·R of the circumference, 4 — area S = π·R2. The order number of one element and its value (as a real number) are given. Output values of other elements in the same order. Use 3.14 for a value of π.
let n : number = 4, v : number = 6, p : number = 3.14;
let R : number, D : number, L : number, S : number;
switch(n){
    case 1:
       R = v;
       D = 2 * R;
       L = 2 * p * R;
       S = p * R**2;
       console.log("D =",D,"L =",L,"S =", S)
       break;
    case 2:
       D = v;
       R = D / 2;
       L = 2 * p * R;
       S = p * R**2;
       console.log("R =",R, "L =",L, "S =",S)
       break;
    case 3:
        L = v;
        R = L / (2 * p);
        D = 2 * R;
        S = p * R**2;
        console.log("R =",R, "D =",D, "S =",S)
        break;
    case 4:
        S = v;
        R = Math.sqrt(S/p);
        D = 2 * R;
        L = 2 * p * R;
        console.log("R =",R, "D =",D, "L =",L)
        break;       
}

//Task 16
//Given an age in years (as an integer in the range 20 to 69), output its alphabetic equivalent as: "twenty years", "thirty-two years", "forty-one years", etc.
let age : number = 48;
let N : number = Math.trunc(age/10);
let M : number = age % 10;
switch(N){
    case 2:
        if(M === 0){
            console.log("Twenty years");
        }else if(M === 1){
            console.log("Twenty one years");
        }else if(M === 2){
            console.log("Twenty two years");
        }else if(M === 3){
            console.log("Twenty three years");
        }else if(M === 4){
            console.log("Twenty four years");
        }else if(M === 5){
            console.log("Twenty five years");
        }else if(M === 6){
            console.log("Twenty six years");
        }else if(M === 7){
            console.log("Twenty seven years");
        }else if(M === 8){
            console.log("Twenty eight years");
        }else{
            console.log("Twenty nine years");
        }
        break;
    case 3:
        if(M === 0){
            console.log("Thirty years");
        }else if(M === 1){
            console.log("Thirty one years");
        }else if(M === 2){
            console.log("Thirty two years");
        }else if(M === 3){
            console.log("Thirty three years");
        }else if(M === 4){
            console.log("Thirty four years");
        }else if(M === 5){
            console.log("Thirty five years");
        }else if(M === 6){
            console.log("Thirty six years");
        }else if(M === 7){
            console.log("Thirty seven years");
        }else if(M === 8){
            console.log("Thirty eight years");
        }else{
            console.log("Thirty nine years");
        }
        break;
    case 4:
        if(M === 0){
            console.log("Forty years");
        }else if(M === 1){
            console.log("Forty one years");
        }else if(M === 2){
            console.log("Forty two years");
        }else if(M === 3){
            console.log("Forty three years");
        }else if(M === 4){
            console.log("Forty four years");
        }else if(M === 5){
            console.log("Forty five years");
        }else if(M === 6){
            console.log("Forty six years");
        }else if(M === 7){
            console.log("Forty seven years");
        }else if(M === 8){
            console.log("Forty eight years");
        }else{
            console.log("Forty nine years");
        }
        break;
    case 5:
        if(M === 0){
            console.log("Fifty years");
        }else if(M === 1){
            console.log("Fifty one years");
        }else if(M === 2){
            console.log("Fifty two years");
        }else if(M === 3){
            console.log("Fifty three years");
        }else if(M === 4){
            console.log("Fifty four years");
        }else if(M === 5){
            console.log("Fifty five years");
        }else if(M === 6){
            console.log("Fifty six years");
        }else if(M === 7){
            console.log("Fifty seven years");
        }else if(M === 8){
            console.log("Fifty eight years");
        }else{
            console.log("Fifty nine years");
        }
        break;
    case 6:
        if(M === 0){
            console.log("Sixty years");
        }else if(M === 1){
            console.log("Sixty one years");
        }else if(M === 2){
            console.log("Sixty two years");
        }else if(M === 3){
            console.log("Sixty three years");
        }else if(M === 4){
            console.log("Sixty four years");
        }else if(M === 5){
            console.log("Sixty five years");
        }else if(M === 6){
            console.log("Sixty six years");
        }else if(M === 7){
            console.log("Sixty seven years");
        }else if(M === 8){
            console.log("Sixty eight years");
        }else{
            console.log("Sixty nine years");
        }
        break;
    default:
        console.error("Invalid year");
        break;
}

//Task 20
//Given two integers D (day) and M (month) that represent a correct date, output the zodiacal name corresponding to this date: "Aquarius" 20.1–18.2, "Pisces" 19.2–20.3, "Aries" 21.3–19.4, "Taurus" 20.4–20.5, "Gemini" 21.5–21.6, "Cancer" 22.6–22.7, "Leo" 23.7–22.8, "Virgo" 23.8–22.9, "Libra" 23.9–22.10, "Scorpio" 23.10–22.11, "Sagittarius" 23.11–21.12, "Capricorn" 22.12–19.1.
let DAY : number = 15, MONTH : number = 2;
switch(MONTH){
    case 1:
        if(DAY < 20){
            console.log("Capricorn");
        }else {
            console.log("Aquarius");
        }
        break;
    case 2:
        if(DAY < 19){
            console.log("Aquarius");
        }else {
            console.log("Pisces");
        }
        break;
    case 3:
        if(DAY < 21){
            console.log("Pisces");
        }else {
            console.log("Aries");
        }
        break;
    case 4:
        if(DAY < 20){
            console.log("Aries");
        }else {
            console.log("Taurus");
        }
        break;
    case 5:
        if(DAY < 21){
            console.log("Taurus");
        }else {
            console.log("Gemini");
        }
        break;
    case 6:
        if(DAY < 21){
            console.log("Gemini");
        }else {
            console.log("Cancer");
        }
        break;
    case 7:
        if(DAY < 23){
            console.log("Cancer");
        }else {
            console.log("Leo");
        }
        break;
    case 8:
        if(DAY < 23){
            console.log("Leo");
        }else {
            console.log("Virgo");
        }
        break;
    case 9:
        if(DAY < 23){
            console.log("Virgo");
        }else {
            console.log("Libra");
        }
        break;
    case 10:
        if(DAY < 23){
            console.log("Libra");
        }else {
            console.log("Scorpio");
        }
        break;
    case 11:
        if(DAY < 22){
            console.log("Scorpio");
        }else {
            console.log("Sagittarius");
        }
        break;
    case 12:
        if(DAY < 22){
            console.log("Sagittarius");
        }else {
            console.log("Capricorn");
        }
        break;
}