/* console.log('Proxy and Reflect')

let person = {
    firstName: 'Ismail',
    lastName: 'Hosen'
}
Object.assign(person, {
    age: 23
})
console.log(person)

let newPerson = new Proxy(person, {
    get: (target, prop, receiver) => {
        if (prop in target) {
            console.log(prop + ' is accesable')
            return target[prop]
        } else {
            return prop
        }
    },
    set : (target,prop,value) =>{
        if(value.length<3){
            throw new Error('Value must be 3 charactars')
            return false;
        }
        else if(!prop in target){
            throw new ReferenceError('Unknown Property '+ prop)
            return false;
        }
        else if(prop in target){
            target[prop] = value
            return true
        }else{
            throw new Error('prop not valid')
            return false
        }
    }
})
console.log(newPerson.ff) // return ff
console.log(newPerson.age) // return 23
try {
    //newPerson.y = 'Siraj';
    newPerson.firstName = 'Siraj';
    console.log(newPerson)
} catch (error) {
    console.log(error.message)
} */

/* let user = {}
Reflect.set(user,'name','Ismail Hosen')
Reflect.set(user,'age',23)
console.log(user) */

/* class User {
    name ; 'ismail'
    constructor(name){
        this.name = name
        console.log(`Your name is : ${name}`);
    }
}
let user = new User('Ismail')
user.name = 'Hosen'
console.log(user.name) */

class User {
    //name = 'x' //normal
    _name = 'ismail'//protected
    //#name = 'Ismsil' //private
    constructor(name){
        this._name = name
        console.log(`Your name is : ${this._name}`);
    }
}
let user = new User('Ismail')
user.name = 'Hosen'
console.log(user.name)