/* export const sayHello = (name) => {
    console.log('Hello! '+name )
}

 */

/* export let user = {
    name : 'Ismail Hosen Raj'
}

export const counter = (x)=>{
    return ++x;
} */

/* let user = {
    name : 'Ismail Hosen Raj'
}

const counter = (x)=>{
    return ++x;
}

export {user,counter} */
/* export {user as userName,counter as count} */
/* export default function sayHi () {
    console.log("Default Export")
} */
/* //does not duplicate defauly allow
export default function sayHi1 () {
    console.log("Default Export1")
} */

/* export default function xx () {
    console.log("Default Export")
} */


//eval
/* let exp = '2*3+5/5+5*5'
    x = 'let y = 0; ++y'
console.log(eval(exp))
console.log(eval(x)) */

//Currying
let sum = x => {
    return y => {
        return z => {
            return x + y + z;
        }
    }
}
/* let data = sum(5)
let data1 = data(5)
let data2 = data1(5) */
console.log(sum(5)(5)(5))


let usr = {
    name: "Ismail",
    go: function () { //arrow function doesnot work 
        //console.log(this.name)
        return this.name
    }
};

/* console.log(usr.go())
const bigInt = 72n;
const bigInt1 = 72;
console.log(bigInt+bigInt1);//Cannot mix BigInt and other types, use explicit conversions
console.log(BigInt(10)); */

let bigInt2 = 10n;
let number = 3;
console.log(bigInt2 + BigInt(number));
console.log(number + Number(bigInt2));
console.log(++bigInt2);
console.log(+number);
console.log(Number.MAX_SAFE_INTEGER);
const mixed = [12n,5,-40n,4,5,70]
console.log(mixed.sort());
if (0n) {
    console.log('if!')
  } else {
    console.log('else!')
  }