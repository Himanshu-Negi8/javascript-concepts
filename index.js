/*


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


*/




