/*

//block is nothing but region between pair of curly braces and block is also known as compound statement.
// block can be used to combine multiple statements and place it where a single line statement is required
//Example
if(true)
{
	//compound statement
	var a =10;
	console.log(a);
}



*/


// Block Scope means what all variables and functions we can access inside the block.
/*let and const are block scoped it means we can not access them outside the particular block once we are out of that particular 
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
*/

/*
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


*/

//same with const

const c=100;

function x(){
	const c =10;
	console.log(c);
}
x();
console.log(c);

