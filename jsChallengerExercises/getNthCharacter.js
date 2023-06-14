// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

const getNthCharacter =( string,n) => n >= 0 && n < string.length ?  string.charAt(n) : ''
console.log(getNthCharacter("kevine",2))