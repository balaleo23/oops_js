function HtmlElement(){


    this.click = function(){
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focused')
}



function HtmlSelectElement(items = []){

    // this.change = function(){
    //     console.log('changed')
    // }   

    this.item = items
  
    this.additem =  function(item){ 
        items.push(item)
    }

    this.removeitem = function(item){
        items.pop(item)
    }


}

HtmlSelectElement.prototype =new HtmlElement()
// HtmlSelectElement.prototype = Object.create(HtmlElement)
HtmlSelectElement.prototype.constructor = HtmlSelectElement


