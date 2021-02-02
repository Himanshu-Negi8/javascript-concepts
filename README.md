















### Basic JavaScript Code Concept of Defined and Not Defined
```javascript
var a;
console.log(a);
a=10;
console.log(a);
a="hello world";
console.log(a);
```




```javascript
var a;

console.log(a);

a =10;


if(a===undefined){
	console.log("a is Undefined");
}else{
	console.log("a is not Undefined");
}

```


```javascript
var  a =10;

function b(){
	var x =10;

}

console.log(window.a);
console.log(a);
console.log(this.a);
```



---




### Function invocation and variable environment

1. Output will be 10,100,1 because for each function call there will be a seprate execution context 
and in each memory component 'x' is different because of local memory space in its own EC.
```javascript
var x = 1;
a();
b();

console.log(x);

function a(){
	var x =10;
	console.log(x);
}

function b(){
	var x =100;
	console.log(x);
}

<!---------------->



var x = 7;

function getName(){

	console.log("Namaste Javascript");

}


getName();
console.log(x);
console.log(getName);

```

### Concept of Hoisiting and Undefined/Not Defined Difference 

//Execution Context Concept plays a game here 
```javascript
getName();
console.log(x);
console.log(getName);

var x =7;


var getName2 = function(){


}

var getName = () =>{
	console.log("Namaste Javascript");
}


```


## Scope chain and lexical environment

Scope is Directly related to lexical environment.

Whenever a Execution context is created along with this a lexical environment is also created. Lexical Environment is local memory along
with the lexical environment of its parent or so called reference to its parent.(Lexical means hierarchy or in sequence)

```javascript
function a(){
	var b =10;
	c();

	function c(){
		console.log(b);
	}
}


a();
console.log(b);

```




<!----------------->
After looking for b in its own lexical environment in c it will go to lexical envrionment of its parent where b is also not defined
and then a will also look for it lexically so called parent i.e. GEC where b is again not define so ultimately it will print not defined
```javascript
function a(){
	
	c();

	function c(){
		console.log(b);
	}
}


a();
console.log(b);
```

