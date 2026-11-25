// Function :Function ek code ka block hota hai jise hum ek baar create karke multiple times use kar sakte hain.

// Normal Function

// function greet(){
//     console.log("hello javascripts");
// }
// greet();

// Function Expression kya hota hai
// :Jab function ko kisi variable mein store karte hain use Function Expression kehte hain.

let greet = function () {
    console.log("hello world");
}

// greet();

// Arrow Function

const greet1 = () => {
    console.log("hello dev");
};
greet1();

// Addition of Two Numbers

const add = (a, b) => {
    console.log(a + b);
};

add(10, 20);

// Arrow Function with Return

const add1 = (a, b) => {
    return a + b;
};

let result = add(10, 20);
console.log(result);


// // Function Parameters & Arguments
// Parameters :Function banate time jo variables likhte hain unhe parameters kehte hain.
// Argument :Function call karte time jo actual values dete hain unhe arguments kehte hain.

function grret(name) {
    console.log("hello" + name);
}
grret("Dev");

// Find Greater Number

const greater = function (a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }

};

console.log(greater(50, 20));

// Rest Parameters :Jab hume nahi pata ki function call karte time kitne arguments aayenge, tab hum Rest Parameters use karte hain 

// Multiple Numbers Print

function showNumbers(...numbers) {
    console.log(numbers);

};
showNumbers(10, 20, 30, 40, 50);

// Multiple Names

function student(...names) {
    for (let name of names) {
        console.log(name);

    }
}
student("dev", "rahul", "amit", "jay");

// Count Total Arguments

function count(...values) {
    console.log(values.length);

};

count(10, 20, 30, 40, 50);

// Rest Parameter with Normal Parameter

function students(name, ...subjects) {
    console.log("name:", name);
    console.log("subjects:", subjects)
}

students("dev", "js", "python", "react");

// Function Scope :Function ke andar ka variable, function ke bahar access nahi kar sakte

// function showMessage(){
//     let message="dev"
//     console.log(message);
// }
// showMessage();
// console.log(message);


// Closure kya hota hai?
// Jab ek function ke andar doosra function hota hai aur inner function outer function ke variables ko access kar pata hai, use Closure kehte hain.

// function outer(){
//     let name :"yash";

//     function inner(){
//         console.log(name);
//     }
//     inner();
// }
// outer();


function outer() {
    let count = 10;

    function inner() {
        console.log(count);
    }
    return inner;
}
let result1 = outer();
result1();


// Callback Function kya hota hai?
// JavaScript mein Callback Function ek aisa function hota hai jise hum doosre function ke andar argument (parameter) ke roop mein pass karte hain.

function grret(){
    console.log("hello dev")
}

function message(callback){
    callback();

}

console.log(greet);

// Callback with Parameters

function add2(a,b){
    console.log(a+b);
}

function calculate(callback){
    callback(10,20);
}
calculate(add2);

