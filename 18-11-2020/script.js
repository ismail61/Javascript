function *generateSequence(){
    yield 1;
    yield 2;
    yield 3;
    return 33;
}
let generator  = generateSequence()
/* let one = generator.next()
console.log(one)
let two = generator.next()
console.log(JSON.stringify(two))
let three = generator.next()
console.log(three)
let four = generator.next()
console.log(four */

for(let value of generator){
    console.log(value)
}
