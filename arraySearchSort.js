// let numbers = [2, 3, 4, 5, 6, 7, 8, 34, 5, 12];

// // console.log(numbers.indexOf(34)); // used for finding the position of any index in array
// console.log(numbers.lastIndexOf(5))
// console.log(numbers.includes(35));
// console.log(numbers.sort());








// // anonymeous function
// // a function which havent a name
// // a function  with no call
// // no reuse

// // let store = function () {
// //     console.log("i am a anonyme function");
// // }


// let store2 = function store() {
//     console.log("you are the function with name");
// }

// store();







// setTimeout(funct)


// setTimout(anonyFunction, time)

// setTimeout(function () {
//     console.log("you are the anonyme function")
// }, 3000)


// let store = function (a) {
//     console.log("we are using anonymes function",a)
// }
// store(3);
// store(4)



// function with its name

// function hello(information) {
//     return information;
// }
// let store = hello("hello students")

// console.log(store);



// function with anonymeous

// function (information ="hellow world") {
//     console.log(information)
// }

// iife ==> imediately invoked function expression
// (anonymeous function)()
// (function (information = "anonym function is running by iife") {
//     console.log(information)
// }
// )();




// store anonym function in variable


// let store = function (information) {
//     console.log(information)
// }

// store("am using the anonym function by a variable name");
// store("javaScript is running");


// // function with name

// function information(printvar) {
//     console.log(printvar)
// }


// information("am using the  function by  name");
// information("javaScript is running");





// callback function

function calltoPessenger() {
    console.log("come outside am waiting here ");
}

function callTaxi(calltoPessenger) {
    console.log("where are you please... come at hyderbad state life building and call me")
    calltoPessenger();
}

callTaxi(calltoPessenger);
