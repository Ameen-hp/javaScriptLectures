

// // basic syntax of function with parameters and arguments 
// // function sum(sum1,sum2,sum3){
// //     console.log(sum1+sum2+sum3);
// // } 

// // sum(3,6,7)
// // sum(9,8,5)
// // sum(3,5,6)


// // return????

// // let sub1 = 70;
// // let sub2 = 60;
// // let sub3 = 80;
// // let total = 300;

// // function calculatePercentage(eng,phys,chem,total) {
          
// //       let percentage = ((eng+phys+chem)/total)*100;
// //       console.log(percentage);
// // }

// // let store = calculatePercentage(sub1,sub2,sub3,total)+10;
// // console.log(store+"%")



// // arrow function 

// // with name and without name 

// // let sum = (a,b) => a+b;
// // let store = sum(5,2)*4;
// // console.log(store)

// // // regular function 

// // function sum(a,b) {
// //   return a+b;
// // }
// // let store1 = sum(4,5);
// // console.log(store1)

// // high order functions

// // map,filter,reduce,find,some,every

// // map 
// // let numbers = [10,5,7,18,17,20];
// //  Array.higherOrderFunction(function(value){
//     //  return condition;
// // })
// //20
// // function multiplyByTwo(val) {
// //     return val*2
// //  }
// //  [20,10,14]
// // let store = numbers.map(function(val){
// //     return val+2;
// // });
// // console.log(typeof(store));
// // regular function 


// // // filter 

// // let numbers = ["Ameen","Yougesh","wasiullha","Farinaz","dua","Ramesh","samiaullha","gulnaz","bua"];
// // // [10,18,20]
// // let store = numbers.filter((val)=>{
// //     return val.match("naz");
// // })

// // console.log(store);




// // reduce 
// // let array = ["Ameen","yougehs","computer"];
// //  let store =   array.reduce((val1,val2)=> {
// //      return val1+val2
// //    })

// //    console.log(store);



// // find 


// // let numbers = [3,4,5,6,19];
// // let store = numbers.find((val)=> {
// //     return val%2==0;
// // })
// // console.log(store)



// // some 

// // let numbers = [3,4,5,6,19];

// // let store = numbers.some((val)=> {
// //       return val%2==0
// // })
// // console.log(store);



// // every 

// // let numbers = [3,4,5,6,19];

// // let store = numbers.every((val)=> {
// //       return val%2==0
// // })
// // console.log(store);


// // sort 


// // let numbers = [3,1,2,9,5,6];

// // let store = numbers.sort((a,b)=> {
// //       return b - a;
// // })
// // console.log(store);




// // foreach

// // let names = ["Ameen","Yougesh","wasiullha","Farinaz","dua","Ramesh","samiaullha","gulnaz","bua"];

// // names.forEach((element)=> {
// //     console.log(element);
// // })



// // Objects 


// let array = [12,3,5,6];

// // array.forEach(printOneByOne);

// // function printOneByOne(element) {
// //     console.log(element);
// // }

// const numbers = [1, 2, 3];
// numbers.forEach(num => {
//   console.log(num * 2);
// });
// // Output: 2, 4, 6
// // But `forEach` returns undefined










// argument 

// regular function ,, traditional function ,,, named function
function print() {
  console.log("hell how are you?");
}

// anonyme function 
// requirments 
// 1 pass me a function, pass me time

// let time = 2000;

// setTimeout(function () {
//     console.log(123);
// },time);




// parameters,arguments,return;


// let a = 5;
// let b = 4;

// function sum(recievA,recievB) {
//      return recievA+recievB;
// }

// let store = sum(a,b)*3;

// console.log(store);



//  return example
// let salary = 20000;

// function provideSalary(getSalary) {
//     return getSalary;
// }
// let bonus = 3000;
// let store = provideSalary(salary)+bonus;
// console.log(store);



// arrow function    ==> to make regular function short .. invent in es6

// function printVariable(getY) {
//     return getY;
// }
// let store = printVariable(4)+5;
// console.log(store);


// let printVariable = getY => getY;
// let store = printVariable(4)+5;
// console.log(store);

// let x = 5
// setTimeout((x=2)=>console.log(x),2000)  
// setTimeout((x=5)=> {
//     console.log(x);
// },4000)





// let print3Lines = () => {
//     console.log("javaScript");
//     console.log("python");
//     console.log("Java");
// }

// print3Lines();





// array iterations 

// syntax of array iterations 
 
// array 

// method
// function

// forEach  function
// one by one print an element of the array 
// dont change original array 

// let computer_Fields = ["WebDevelopment","Artificial Intelligence","Androud Development","Cloud","Cybere Security"];


//   computer_Fields.forEach(printElements)
  

// function printElements(element) {
//     console.log(element)
// }


// map function 

// let computer_Fields = ["WebDevelopment","Artificial Intelligence","Androud Development","Cloud","Cybere Security"];

// let store = computer_Fields.map(function printElements(element) {
//   // console.log(element);
//   return element
// })

// console.log(store);


// filter function 

// let numberArray = [1,,5,12,10,2,4,8,14,15,54];

// let store = numberArray.filter(function(element){
//      return element < 8;
// })

// console.log(store);



// Object ==> property,behavior,action;
// there are two types of actions 
//  action 1 for living thing
// action 2 for non living thing






