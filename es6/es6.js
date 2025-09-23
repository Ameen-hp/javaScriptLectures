
// es => Ecma Script, 6 => version

// let,const

// block scope, loops,conditional statements

// block in loops
// for(let i = 0; i < 4;i++) {
//     console.log("Ameen")
// }

// // 
// block in conditional statements
// if(true) {
//     console.log("AMeen")
// }

// block in function 


// var,let,const




// function run () {
//     var numberOne = 4;
//     console.log()
// }
// eat()
// var numberOne  = 12
// numberOne = 10;
// console.log(numberOne);


// for(let i = 1; i < 5;i++) {
//       var blocVariable = "BlockScope"
// }


// if(true) {
//    var blocVariable = "BlockScope" 
// }
// console.log(blocVariable)


// let 


// function  checkLet () {
//   let store = 122;
// }

// if(true) {
//     let store = 32
// }
// console.log(store)




// Template literals
// let a = 4;
// console.log("Muhammad Ameen "+a);

// console.log(`Muhammad Ameen ${a}
    
//       javaScript developer
    
//     `)




// regular function
// function eat (x) {
//     console.log(x)
// }

// eat(2)

// Arrow functions
// let eat = (x,y) => console.log(x,y)


// eat(6,3)


// default parameters
// let sum = (a,b=4) => console.log(a+b);

// sum(5,5)


// Rest/spread

// let sum = (...numbers) => {
//     let sum = 0;
//     for(let i=0; i<numbers.length;i++) {
//          sum = sum+numbers[i];
//     }
//     console.log(sum);
// }

// sum(12,10,20,11,14,234,23,4,234,2,34) // rest 



// destructuring 

// to unpack the values and properties  of array and objects

// destructure the object 

// let student1 = {
//    name:"Yogesh",
//    age: 24,
//    address:"tandoAllhyar british center,near qila"
// }


// let {name,age,address} = student1;
// console.log("Name:"+name);


// let departments = ["computer sceicne","software","Ai","BBA"];

// let [,department2,,] = departments

// console.log(departments)


// object parameter destructuring


// function getStudentData ({name,age,address}) {
       
//      console.log(`
//           name: ${name},
//           age: ${age},
//           address: ${address}
//         `)
// }

// let student1 = {
//    name:"Yogesh",
//    age: 24,
//    address:"tandoAllhyar british center,near qila"
// }


// getStudentData(student1);



// array paramater destructuring


// function getStudentData ([name,age,address]) {
       
//      console.log(`
//           name: ${name},
//           age: ${age},
//           address: ${address}
//         `)
// }


// let array = ["ameen",24,"tandoAllhyar,naserpur"]

// getStudentData(array)


// javaScript modules


