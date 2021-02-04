
/*
Closures are combination of function bundled together with reference to its lexical environment.
In other way function along with it's lexical scope forms colsure.

Uses of Closures:
-Module Design Pattern
-Currying
-Functions like once
-memoize
-maintain state 'in async' world
-setTimeouts
-Iterators
-and many more..

Example 


function x(){
	var a =7;
	function y(){
		console.log(a);
	}
	y();
}

x();

<!-------------->

function x(){
	var a =7;
	function y(){
		console.log(a);
	}
	return y;
}

var z = x(); // function 'x' is no longer in the scope
console.log(z);
z();//will print value of 'a' because of closure even 'x' is not there but 'z' has reference to it

function x(){
	var a =7;
	//instead of returning sepratelt we can also do like this
	return function y(){
		console.log(a);
	}
	
}

var z = x();
console.log(z);
z();

<!----------->


function adder(x){
	return function(y){
		return x+y;
	}
}

var add5 = adder(5); 
var add10 = adder(10);


console.log(add5(2));//will print 7
console.log(add10(2));//will print 10;

In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. 
In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. 
In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

<!-------->
function x(){

	var a =10;

	function y(){
		console.log(a);
	}
	a =100;
	return y;
}

var z = x();
console.log(z);
z(); // will print 100 because a is changed  


<!------------->
function z(){
	var b = 900;

	function x(){

		var a =10;

		function y(){
			console.log(a,b);
		}
		
		y();
	}
	x();
}

z();

*/




/* setTimeout and closure*/
/*

function x(){
	var i =1;

	
	//function(){console.log(i);} this function forms a closure and remembers reference of 'i'
	
	setTimeout(function(){
		console.log(i);
	},1000);
	console.log("Namaste Javascript");
}


x();

<!------->

function x(){
	for(var i=1;i<=5;i++){
		setTimeout(function(){
			console.log(i);
		},i*1000);
	}
	console.log("Namaste Javascript");
}

x();


<!------>

function x(){
	for(let i=1;i<=5;i++){
		setTimeout(function(){
			console.log(i);
		},i*1000);
	}
	console.log("Namaste Javascript");
}

x();


*/

function x(){
	for(var i=1;i<=5;i++){
		function close(x){
			setTimeout(function(){
				console.log(x);
			},x*1000);

		}
		close(i);
	}
	console.log("Namaste Javascript");
}

x();