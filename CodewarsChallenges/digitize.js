// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize = n => {
let result = Array.from(String(n),Number)
return result.reverse()}