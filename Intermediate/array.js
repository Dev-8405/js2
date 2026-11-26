// array :Ek variable ke andar multiple values store karna Array kehlata hai.

// let fruits =["aplle","banana","orange"]
// console.log(fruits[1]);

// Update:Array ke existing element ko change karna Update kehlata hai.

// let fruit =["apple","banana","mango"]
// fruit[2]="orange";
// console.log(fruit);

// push :Array ke end mein new element add karta hai.


// let fruits2 = ["Apple", "Banana"];

// fruits.push("Mango");

// console.log(fruits2);

// unshift :Array ke starting mein new element add karta hai

let fruits = ["Apple", "Banana"];

fruits.unshift("Mango");

// console.log(fruits);

// // pop :Array ka last element remove karta hai.

// let numbers = [10, 20, 30, 40];

// numbers.pop();

// console.log(numbers);

// . shift:Array ka first element remove karta hai.



// slice :Array ke selected elements ko copy karke new Array return karta hai. Original Array change nahi hota.

// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.slice(1, 4);

// console.log(result);
// console.log(numbers);

// splice :Array mein elements add, remove ya replace kar sakta hai. Original Array change hota hai.

// let numbers = [10, 20, 30, 40];

// numbers.splice(1, 2);    

// console.log(numbers);

// filter :condition satisfy karne wale saare elements ka new Array return karta hai.

// let numbers = [10, 15, 20, 25, 30];

// let result = numbers.filter(num => num > 15);

// console.log(result);

// reduce:Array ke elements ko combine karke ek single value return karta hai.

let numbers = [10, 20, 30, 40];

let result = numbers.reduce((total, num) => {
    return total + num;
},0);

console.log(result);



// Object kya hota hai?
// Object ke andar data key aur value ke form mein store hota hai.

let person={
    name :"rahul",
    age :25
};

console.log(person);

// Add and Update Properties:Object mein new property add karna aur existing property change karna.

let students ={
    name: "hardik",
    age :23
};

 students.city ="surat";
 console.log(students);

//  this Keyword
//  this keyword current Object ko refer karta hai (normal method call ke context mein).

let student={
    name : "smit",
    age : 23,


 Show:function(){
    console.log(this.name);
    console.log(this.age);

 }
};
student.Show();

