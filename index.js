
//eg of creating objects using literals

const circle = {

    //properties to hold values
    radius :1,
    location:{
        x:1,
        y:1
    },

    //method used to some function
    draw : function(){
        console.log('draw');
    }
}; //object in js key value pairs


//eg of creating objects using the factory function

function createCircle(radius){
    return{
     radius,
    draw: function(){
        console.log('draw method inside factory');
    }
    };

}


// creating the object using the constructor function:
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw inside the constructor")
    }

}

const another = new Circle(1);
another.draw();


circle.draw(); //method using the object literals
 
const circle2 = createCircle(1); // method using the factory method
circle2.draw();



//value types and reference types

//Primitives are value copied by the value 
let a = 10;

function increase(a){
    a++; //10
}

increase(a);


console.log("prmitive: "+ a); //10



let b  = {value: 10};



// objects are copied by the reference
function increase(b){
    b.value++;
}

increase(b)



console.log("referencetype: "+ b.value); //11




const circle_enumerate = new Circle(1);

//every word in the java script is an object even the function is the object
//you can access the function using the .[dot] keyword or the [bracket]

for (let key in circle_enumerate){
    console.log( "inside Enumrate: " + key);
}



for (let key in circle_enumerate){
    if(typeof circle_enumerate[key] !== 'function'){
    console.log( "inside Enumrate: " + key);
}
}

//retriving the keys in js
const keys = Object.keys(circle_enumerate);
console.log(keys);


if ('radius' in circle_enumerate){
    console.log("yes");
}


function circlewithconstructor(radius){
    this.radius = radius;

    let defaultlocation = {x : 1, y : 1};

    this.getDefaultLocation = function(){
        return defaultlocation;
    }

    Object.defineProperty(this, 'defaultlocation', {
            get: function(){
                return defaultlocation;
            },

            set:function(value){
                if(!value.x && !value.y)
                    throw new Error('invalid Location');
                defaultlocation = value
            }
    })

    this.draw = function(){
        console.log("draw method inside constructor");
    }

}


const anothercircle =  new circlewithconstructor(1);

anothercircle.defaultlocation = {x:1 ,y:2};
// anothercircle.defaultlocation = {x : 2, y : 2};




    


