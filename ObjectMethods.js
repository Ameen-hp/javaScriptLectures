

// Methods in Object
// when we use an function in object its   called method
// let Student = {
//     name:"Noman",
//     age:16
// ,
//  read:function () {
//     console.log("student is reading")  // perfoming an action
//  }

// }


// Student.read();




// let UpperCaseConverter = {

//     UpperCaseMethod(reciveText) {
//           console.log(reciveText.toUpperCase());
//     }
// }

// UpperCaseConverter.UpperCaseMethod("we are coding");




// this keyword 


// let Car1 = {
//     name:"corola",
//     color:"red",
//     model:2020,

//     printProperties() {
//         console.log("the name of this car is "+this.name+" the color of this car "+this.color);
//     }
// }

// Car1.printProperties();

// BankAccount 

// let BankAccount = {
//     owner:"Ameen",
//     balance:20000,
   
//     checkBalance() {
//         console.log("your balance is "+this.balance)
//     }
//     ,
//     Withdraw(WithdrawBalance) {
//         if(this.balance > WithdrawBalance) {
//             console.log("your remaining balance after withdraw is  "+(this.balance - WithdrawBalance));
//         }
//         else {
//             console.log("you have not enough balance")
//         }
//     }
    

// }

// BankAccount.checkBalance();
// BankAccount.Withdraw(8000)









let Products = [
   {name:"laptop",price:30000,category:"electronics"},
   
   {name:"Phone",price:20000,category:"electronics"},
   
   {name:"shirt",price:2000,category:"clothing"},
]

console.log(Products[0]);

