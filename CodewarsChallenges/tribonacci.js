// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next
const tribonacci = (signature,n) =>{
let result = signature.slice()
for(let i =3;i<n;i++) {
   let nextNumber = result[i-1] + result[i-2]+ result[i-3]
   result.push(nextNumber)
}
return result.slice(0,n)


}