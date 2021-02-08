
//function statement aka function declaration
function a(){
	console.log("a is called");
}


//function expression

var b = function(){
	console.log("b is called");
}

a();
b();

/*the major difference b/w function statement and expression is hoisting in function statement ;a' gets the memory
and function is assigned to 'a' even without executing a single line of code but not same in-case of 'b'*/


//Anonymous function - Function without name and used where function used as a value


// function(){

// }

// Named Function Expression - same as function expression but here name is given instead of anonymous function

var z = function xyz(){
	console.log("xyz is called");
}
z();

// Difference between Parameters and Arguments ?

/* 
The values passed inside during the function calls are arguments and the identifier which 
gets those value are known as parameter

Example
```javascript

function x(param1,param2){

}
x(args1,args2);

```
*/

// First Class Function - the ability of functions to use as value is known as first-class function
//First Class Citizens
var c = function(param1){
	return function(){

	}
}

console.log(c(function(){}));




// Arrow Functions



