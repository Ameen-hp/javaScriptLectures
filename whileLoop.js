
// let InputNumber = parseInt(prompt("please enter the number"));
// while (InputNumber != 11) {
//     console.log("javaScript");  // javaScript
//     InputNumber = parseInt(prompt("enter again please"));
// }



// Random Number generating

// let GenerateNumbers =Math.floor(Math.random() * 10)+1;
// console.log(GenerateNumbers);


// guess the number game;

let attempt = 0;
let guessNumber = parseInt(prompt("please guess the number"));
let RandomNumber = Math.floor(Math.random() * 10);
while (guessNumber != RandomNumber) {
    console.log("you guess the wrong Number!");
    guessNumber = parseInt(prompt("please try again!"));
    attempt++;
}

console.log("you guess the right Number in just "+attempt+" attempts")
