// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// a is considered "close to" b if margin is greater than or equal to the distance between a and b.
const closeCompare = (a, b, m = 0) => Math.abs(a - b) <= m? 0: Math.sign(a - b);