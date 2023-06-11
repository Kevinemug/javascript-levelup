// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
const  numbersWithDigitInside = (x,d) =>{
    var m = [];
  for (let i = 1; i <= x; i++) {
if(new RegExp(d).test(i + '')) m.push(i);
}
  return [m.length, m.reduce((s, c) => s + c, 0), m.length ? m.reduce((s, c) => s * c, 1) : 0];
}