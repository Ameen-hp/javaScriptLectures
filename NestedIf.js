
//   3%2  = 1??





// let num = 2.1;
// if (num % 2 == 0) {
//     console.log("the number is even");
// }
// else {
//     console.log("the number is odd");
// }



// nested if

// let num = parseInt(prompt("enter the number"));

// if (num % 2 == 0) {
//     console.log("the number is even");
//     if (num == 2) {
//         console.log("the number is aslo 2");
//     }
// }

// else {
//     console.log("the number is odd");
// }


// real life example


// let Chai = prompt("do u have chai??");

// if (Chai == "yes" || Chai == "Yes"  || Chai == "YES") {
    
//     console.log("please bring chai");
//     let Biscuits = prompt("do u have biscuits");
//     if (Biscuits == "yes" || Biscuits == "Yes" || Biscuits == "YES") {
//         console.log("please bring biscuits also")
//     }
//     else {
//         console.log("sorry we havent biscuits");
//     }

// }

// else {
//     console.log("sorry we havent chai");
// }



// registration and login

let previousGamail = "ameen@gmail.com";
let Previouspassword = 2468;
let gmail = prompt("enter your gamail");
let password = prompt("enter your password");

if (gmail == previousGamail && password == Previouspassword ) {
    console.log("you have already registered here");
   
}

else if (gmail != previousGamail && password != Previouspassword) {
    console.log("your gmail was added " + gmail);
    console.log("your password was added " + password);
    console.log("your verificatoin success!");
}


