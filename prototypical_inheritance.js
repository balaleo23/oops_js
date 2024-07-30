function Shape(color){
    this.color = color
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')

}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child

}

extend(Circle, Shape)
extend(Square, Shape)
// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle

function Circle(radius,color){
    Shape.call(this, color)
    this.raduis = radius

    this.draw = function(){
        console.log('draw')
    }
}




let c1  = new Circle(1, 'red')
console.log(c1)

function Square(sides){
    this.sides = sides

    this.draw = function(){
        console.log('draw')
    }
}



// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square