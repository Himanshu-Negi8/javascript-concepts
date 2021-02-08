//what is callback function in javascript

setTimeout(function(){
    console.log("Timer");
},5000)


function x(y){
    console.log("x");
    y();
}


x(function y(){
    console.log("y");
});


document.getElementById("clickMe")
.addEventListener("click", function xyz(){
    console.log("Button clicked"); 
})

//JavaScript is synchronous and single-threaded language


//Blocking the main thread 
/*
js has one call stack if any operation blocks the execution of call stack 
that is blocking the main thread 
*/ 


//Power of callbacks - allow us to do asynchronous thing in js


//Deep about Event Listneres

//Closures Demo with Event Listneres


function attachEventListner(){

    let count=0;

    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked",++count); 
    });

}
attachEventListner();    

//Scope Demo with Event Listneres


//Garbage Collection & removeEventListneres


function attachEventListner(){

    let count=0;

    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked",++count); 
    });

}
attachEventListner();    

