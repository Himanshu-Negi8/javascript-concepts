
console.log("Start");

setTimeout(function(){
    console.log("Callback");
},3000);

console.log("End");

/*
Start 
End
CallBack

*/



console.log("Start");

document.getElementById("btn").addEventListener('click',function cb(){
    console.log("CallBack");
});
console.log("End");




console.log("Start")


setTimeout(function cbT(){
    console.log("timer callback")
},5000);


fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB Netflix");
});

console.log("End");