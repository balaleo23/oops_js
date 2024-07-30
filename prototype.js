//Prototype is simpler versoin of the class


let person = {name : "mosh"}
console.log(person.name) 

for (key in person){
    console.log(key)
}

Object.keys(person)
console.log(Object.keys(person))

let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptors(objectBase, 'toString');
console.log(descriptor)


Object.defineProperty(person, 'name', {
    configurable: false,
    enumerable: false,
    writable: false
})

person.name = "john"
console.log(person.name) //mosh since the writable property is false

delete person.name
console.log(person.name) // not deletable as the configurable is false

for (key in person){
    console.log(key)   // key will not be visible since the enumerable is false

 }


 function Circle(radius){
     this.radius = radius;
    
    //  this.draw = function(){
    //      console.log('draw')
    //  }
 }

 Circle.prototype.draw = function(){
    console.log('draw')

 }



 function Circle(radius){
    this.radius = radius;
    this.move = function(){
        this.draw() // we can call the prototype method inside the instantiated method
        console.log('move')

    
    }
   
   //  this.draw = function(){
   //      console.log('draw')
   //  }
}

Circle.prototype.draw = function(){
   console.log('draw')

}


 let c1 = new Circle(1)
 let c2 = new Circle(1)
 









/*
name
: 
"mosh"
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()

*/