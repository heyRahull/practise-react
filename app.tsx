// const userName:string="Rahul";

// console.log(userName)

// 1. Create a function that adds two numbers (strictly typed).

// const sum = (num1:number, num2:number): number => {
//     const ans = num1 + num2;
//     return ans;
// }

// console.log(sum(20,20));

// 2. Write a function that takes a name (string) and age (number) and prints "Hello Rahul, you are 25".

const printName = (name:string, age:number): void => {
    console.log(`Hello ${name}, you are ${age}`);
}

printName("Rahul", 25);
printName("Ram", 26);