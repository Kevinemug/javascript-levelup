// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.

const bodmas = (a, b, c, d, e, f) =>  (((a + b - c) * d) / e) ** f;