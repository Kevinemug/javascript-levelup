// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
const persistence = number =>{
for(i=0;i>9 ;i++) number.split('').reduce((acc,curr)=> acc * curr)
}