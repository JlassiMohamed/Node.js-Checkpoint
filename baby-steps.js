/*  BABY STEPS (Exercise 2 of 13)   
  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout).
*/

let s = 0;
for (let i = 2; i <= process.argv.length - 1; i++) {
  s = s + Number(process.argv[i]);
}
console.log(s);
