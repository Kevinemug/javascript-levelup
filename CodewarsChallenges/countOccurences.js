// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
const countOccurences = (a,b) => b.split(a).length-1
console.log(countOccurences("e","kevine")) //returns 2