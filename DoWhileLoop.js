
// Do while loop?
//

// for (let i = 0; i <  1; i++) {
//     console.log("javaScript by for loop");
// }


// let i = 0;
// while (i < 1) {
//     console.log("javaScript by while loop")
//     i++;
// }


// do while

// let a = 1;

// do {
//     console.log("javaScript by do while loop");
//     a++;
// }
// while (a < 1);




// simple calculator

let Repeat;
do {
    // basic caclulator program
    
let Num1 = parseInt(prompt("enter first number"));
let sign = prompt("choose sign = (+,-,*,/,%,**)");
let Num2 = parseInt(prompt("enter second number"));
let result;
switch (sign) {
    case "+":
        result = Num1 + Num2;
        console.log("the sum of two numbers is " + result);
        break;
    case "-":
        result = Num1 - Num2;
        console.log("the Subtraction of two numbers is " + result);
        break;
    case "*":
        result = Num1 * Num2;
        console.log("the multiplication of two numbers is " + result);
        break;
    case "/":
        result = Num1 / Num2;
        console.log("the division of two numbers is " + result);
        break;
    case "%":
        result = Num1 + Num2;
        console.log("the module of two numbers is " + result);
        break;
    case "**":
        result = Num1**Num2;
        console.log("the sum of two number is " + result);
        break;
    default:
        console.log("your sign was wrong");
        break;

    }
    

    Repeat = prompt("do you want to repeat the operation  (please enter yes/Yes for perfom operation)");

    
}
while (Repeat === "Yes" || Repeat === "yes")
    
console.log("now you are out from the operation");





