// Loops = Loop ka use kisi code ko baar-baar (repeatedly) execute karne ke liye hota hai, jab tak given condition true hoti hai.

// for loop kya hota hai?
// for loop ka use tab karte hain jab humein pata ho ki code kitni baar execute karna hai.

// question 1: 1 se 10 tak numbers print karo.

//  for (let i=1; i<11; i++){
//     console.log(i);
//  }

//  qu 2: Even numbers print karo.

// for(let i= 2; i<10; i+=2){
//     console.log(i)
// }

// qu 3: table 5 print

// for (let i=1; i<10; i++){
//     console.log(5 *i);
// }
// que 4: 1 to 10  sum calulate karo 


// Factorial Number

// let num =5;
// let fact =1;
// for (i=1; i<=num; i++){
//     fact =fact*i
// }
// console.log(fact);

// While Loop kya hota hai?
// while loop ka use tab hota hai jab humein kisi condition ke true rehne tak code ko baar-baar execute karna ho.

// let i =1;
// while(i <=5){
//     console.log(i);
//     i++;
// }

// que :1 10 se 1 tak reverse counting

// let i =10;
// while( i >= 1){
//     console.log(i);
//     i--;
// }

//quee 2: Even numbers print karo

// let i =2;

// while(i<=20){
//     console.log(i);
//     i+=2;
// }

//  que 3:Multiplication Table

// let i=1;
// while(i<=10){
//     console.log(7*i);
//     i++;
// };

// Factorial print
// 5 ka factoral =120

// let i=1;
// let fact =1;

// while(i<=5){
//     fact =fact +i;
//     i++;
// }
// console.log(fact);

// Fibonacci Series

// let a = 0;
// let b = 1;
// let i = 1;

// while (i <= 10) {
//     console.log(a);

//     let c = a + b;
//     a = b;
//     b = c;

//     i++;
// }


// break :break statement ka use loop ko completely stop karne ke liye hota hai.
// continue:continue statement ka use current iteration ko skip karne ke liye hota hai. Loop completely stop nahi hota, next iteration par chala jata hai.


// Example 1: Print 1 to 10, but stop at 5


// for (let i=1; i<=5; i++){
//     if(i=== 5){
//         break;
//     }
//     console.log(i);
// }

// que 1: Stop when number is 7

// for (let i=1; i<=7; i++){
//     if( i===7){
//         break;
//     }
//     console.log(i);
// }

//  que 2:While loop with break 

// let =1;
//  while(i<=10){
//     if(i === 4){
//         break;
//     }
//     console.log(i);
//     i++;
//  }


 for (let i =1; i<=5; i++){
    if(i ===3){
        continue;
    }
    console.log(i);
 }

// que 1: Skip number 5 and 8

for (let i =1; i<=10; i++){
    if(i===5 || i===8){
        continue;
    }
    console.log(i);
}
