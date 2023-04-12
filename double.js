const dbl=(n)=> n*2
console.log(dbl(20))
//console.log(process.argv)
console.log(dbl(process.argv[2]))

// Destructing and fecthing
const [ , ,num]=process.argv
console.log(dbl(40))