//Given an array of N real numbers, find the minimum among its local maximums.
const myArray : Array<number> = [12, 32, 62, 20, 89, 25, 60, 55, 3, 69];
const myMaxArray : Array<number> = [];

    for (const indexString in myArray) {
      const index = parseInt(indexString, 10);
      if (index === 0 && myArray[index] > myArray[index + 1]) {
        myMaxArray.push(myArray[index]);
        continue;
      }
      if (index === myArray.length - 1 && myArray[index - 1] < myArray[index]) {
        myMaxArray.push(myArray[index]);
        continue;
      }
      if (myArray[index - 1] < myArray[index] && myArray[index] > myArray[index + 1]) {
        myMaxArray.push(myArray[index]);
        continue;
      }
    }

  let minNum = myMaxArray[0];
for (let i = 2; i < myMaxArray.length; i += 2){
    if (minNum > myMaxArray[i]){
        minNum = myMaxArray[i]
    }
}
    console.log(myMaxArray, minNum);