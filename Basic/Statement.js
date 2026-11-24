// if Statement :if statement executes a block of code when the condition is true.

// let age =20;
// if(age >=18){
//     console.log("You are eligible");
// }


// if else Statement

// let age =16;
// if(age >=18){
//     console.log("eligible");
//     }else{
//         console.log(" not eligible");
//     }

//  Voting age check  

let age =20;
if(age>=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}

// Even or Odd number

// let num =7;
// if(num % 2 ===0){
//     console.log("even number");
// }else{
//     console.log("odd number");
// }

// Positive or Negative number

// let number = -5;
// if(num >= 0){
//     console.log("positive number");
// }else{
//     console.log("nagitive number");
// }

// Pass or Fail

// let marks = 35;
// if(marks >= 35){
//     console.log("pass")
// }else{
//     console.log("fail")
// }

// Password check

let pass ="12345"
if(pass === "12345"){
    console.log("login succesful");
}else{
    console.log('wrong password');
}

// Divisible by 5 or not

let numbers =25;
if(numbers % 5 ===0){
    console.log("divisible by 5");
}else{
    console.log("not divisible by 5");
}

// else if Statement

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 70) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// Positive, Negative, Zero

// let num = -5;

// if (num > 0) {
//     console.log("Positive Number");
// }
// else if (num < 0) {
//     console.log("Negative Number");
// }
// else {
//     console.log("Zero");
// }

// Nested if Statement
let age2 = 22;
let License = true;

if (age >= 18) {

    if (License === true) {
        console.log("You can drive");
    }

}

// switch Statement

let day =2;

switch(day){
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");   
        break;

    case 3:
        console.log("wednesday");  
        break;

     case 4:
        console.log("invalid day");
        break;   
}

// Calculator Example

let a = 10;
let b = 20;
let opertor ="+";

switch(opertor){
    case "+":
        console.log(a +b);
        break;
    case "-":
        console.log(a-b);
        break ;
    case "*":
        console.log(a*b);
        break;
     default:
        console.log("invalid opertor");
           
}

// Grade Example

// grade a =excellent
// garde b = good

let grade ="A";

switch( grade){
    case "A":
        console.log("excellent");
        break;
    case "B":
        console.log("good");
        break ;
     default:
        console.log("invalid grade");    

}