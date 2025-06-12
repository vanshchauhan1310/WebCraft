function add(x,y){
    return x+y;
}

let result = add(10,20);
console.log(result)

let fruits = ["apple"];

fruits.push("orange");
fruits.push("kiwi")

fruits.pop()
fruits.unshift("banana");
fruits.unshift("mango");
fruits.shift();


// push() -> Add Element at the last 
// pop() -> Remove Element from last
// shift() -> Delete firsT Element from top
// unshift() -> Add element from top 

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}


let count = 10

while(count>0){
    console.log("hello js")
    count--;
}

let person = {
          name: "Alice",
          age: 25,
          isStudent: true
        };
         
        console.log(typeof person); 
        console.log(person.name)
        console.log(person["age"])


let AlertOutput = alert("This an alert From Javascript");
console.log("Alert Output", AlertOutput)
let name = prompt("Enter Your Name")
console.log("Prompt Output ",name);

let confirmoutput = confirm("Do You Want to Redirect to new site ")
console.log("confirm output", confirmoutput)
