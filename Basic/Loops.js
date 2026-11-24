// Loops = Loop ka use kisi code ko baar-baar (repeatedly) execute karne ke liye hota hai, jab tak given condition true hoti hai.

// for loop kya hota hai?
// for loop ka use tab karte hain jab humein pata ho ki code kitni baar execute karna hai.

// question 1: 1 se 10 tak numbers print karo.

 for (let i=1; i<11; i++){
    console.log(i);
 }

//  qu 2: Even numbers print karo.

for(let i= 2; i<10; i+=2){
    console.log(i)
}



// qu 3: table 5 print

for (let i=1; i<10; i++){
    console.log(5 *i);
}
// que 4: 1 to 10  sum calulate karo 
let sum =0;
for (let i=1; i<=10; i++){
    sum =sum +i;
}
console.log(sum);

// Factorial Number

let num =5;
let fact =1;
for (i=1; i<=num; i++){
    fact =fact*i
}
console.log(fact);





