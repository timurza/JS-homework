/*
//Cycles:
// Task 1
let i = 0;
while(i < 50) {
      i++;
    console.log(i);
}

// Task 2
for( i=1; i<=100; i++){
  if ( i % 2 === 0)
  console.log(i);
}

// Task 3
let arr = [2, 7, 9, 12, 14, 6, 10, 11, 19, 20, 21, 22, 14,
25, 35, 40, 81, 28, 42, 39];
let sum = 0;
for(let i = 0; i < arr.length; i++){
sum += arr[i];
}
alert(sum);

// Task 4
let num = 2;
let degree = 8;
let result = 1;
let i = 0;
while (i < degree) {
  result = result * num;
  i++;
  console.log(result);
}

//Task 5 (1 method)
function maxDigit(n){
  n= 0 | n ;
  let max=-1, remainder=-1;
  do {
    remainder = n % 10;
    max = (max > remainder ) ? max : remainder ;
    n=(n-remainder)*1e-1;
  } while (n!=0);
  return max;
}
console.log(maxDigit(48967));//9


//Task 5 (2 method)
// find the largest and the smallest
  //digit of a number
 function findLargestSmallest(num) {
  let largestDigit = 0;
  let smallestDigit = 9;
  let digit;
  while(num) {
  digit = num%10;
  // Finding the largest digit
  largestDigit = Math.max(digit, largestDigit);
  // Find the smallest digit
  smallestDigit = Math.min(digit, smallestDigit);
  num = parseInt(num / 10);
  }
  console.log("Largest Digit: " + largestDigit);
  console.log("Smallest Digit: " + smallestDigit);
  }
  // Driver Code
  let num1 = 238627;
  console.log("num1: " + num1);
  findLargestSmallest(num1);


  //Arrays:
  //Task 4
  debugger;
  let styles = ['Jazz', 'Blues',];
  styles.push('Rock-n-roll');
  styles[styles.length-2] = 'Classic';
  alert(styles.shift());
  styles.unshift('Rap', 'Reggae');
  

// Challenge 0:
const fullName = {firstname:'Timur', surname:'Alimbekov', patronymic:'Nurzhanovich'};
console.table({fullName});
console.group('Facts about me');
console.log('1: i am honest');
console.log('2: sometimes i am lazy');
*/
// Challenge 1:
