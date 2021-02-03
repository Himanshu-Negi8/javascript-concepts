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


---

### Concept of let and const ,Temporal Dead Zone

Let and Const declarations are hoisted in JS. It mean even witout executing a single line of code they get allocated memory but 
intialized to undefined. They are also not fall in global space. So we can't access them before initializing any value to them.
It will give us a Reference Error particularly with specific message can't access without initialization

Temporal Dead Zone = It is the time being let and const variable hoisted and till it's initialize with any value.If we try to
access any variable in its temporal dead zone it will throw an reference error.

Example -
```javascript
console.log(a); 

let a =10;
var b=100;
```

#### One more thing about let and normal var is that we can't redeclare the let variables it will throw the syntax error.

```javascript

let a =10;
let a =100; // will throw the same syntax error i.e. a is already declared
var b=100;
var b =10000;

```

For let variables we can initialize at any place or we can also say that let variables can be left decalred only.

```javascript


let a;

var b=100;
a=10;

console.log(a); 

```
#### Const keyword work same as let but for it we have to initialize it while declaring 

```javascript

let a =10;

const b;//syntax error


console.log(a)

```

---

#### Block and Block Scope, Shadowing

//block is nothing but region between pair of curly braces and block is also known as compound statement.
// block can be used to combine multiple statements and place it where a single line statement is required
//Example
```javascript
if(true)
{
	//compound statement
	var a =10;
	console.log(a);
}

```




Block Scope means what all variables and functions we can access inside the block.
let and const are block scoped it means we can not access them outside the particular block once we are out of that particular 
block which is not same in case of var.


```javascript

{
	var a =10;
	let b =20;
	const c = 30; 
	console.log(a);
	console.log(b);
	console.log(c);
}

console.log(a);
console.log(b); //throws reference error 
console.log(c); // same error like above

```



Block Scope and Shadowing 

Shadowing is a case which is associated with block and function. A varibale that is declared outside of the block
and if same name variable is inside the block then it shadows the outer variable means it will change the value of variable
beacuse var declared variables are in global space instead of block scope alike let and const.

Example-

```javascript


var a =100;
{

	var a =10;
	let b =20;
	const c =30;
	console.log(a);//10
	console.log(b);//20
	console.log(c);//30
}

console.log(a);//10 because variable a is declared with var keyword and it shadows the outer a by changing the value


```

#### Different Case in terms of let and const beacause they are block scoped 

```javascript
let b =100;
{

	var a =10;
	let b =20;
	const c =30;
	console.log(a);//10
	console.log(b);//20
	console.log(c);//30
}

console.log(b);//100

```

//same with const

```javascript
const c=100;

function x(){
	const c =10;
	console.log(c);
}
x();
console.log(c);
```





