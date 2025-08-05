// variables and selection of elements
let myPassword = 1234;
let balance = 5000;
let withDraw;
let deposite;
let InputPin  = document.getElementById("InputPin");
let EnterPin = document.getElementById("EnterPin");
let showPinError = document.getElementById("showPinError");
let pin_parent = document.getElementById("pin_parent");
let parentOption  = document.getElementById("parentOption");
let enterOption = document.getElementById("enterOption");
let ClickOption = document.getElementById("ClickOption");
let showOption = document.getElementById("showOption");
let showOptionError = document.getElementById("showOptionError")
// functions
let storeInputPin;
InputPin.addEventListener("input",(event)=> {

       storeInputPin = Number(event.target.value);
       
})


EnterPin.addEventListener("click",()=> {
     if(storeInputPin === myPassword) {
        pin_parent.classList.add("hidden")   
        parentOption.classList.remove("hidden")
     } 
     else {
       showPinError.innerHTML = "your pin is wrong"
     }
    
})

let storeOption;
enterOption.addEventListener("input",(event)=> {
          storeOption = event.target.value;
})

ClickOption.addEventListener("click",()=> {
    if(Number(storeOption) === 1) {
        parentOption.classList.add("hidden");
        showOption.innerHTML = "your balance is: " + (balance)
    }
    else if(Number(storeOption) === 2) {
        parentOption.classList.add("hidden");
        deposite = parseInt(prompt("please enter the deposit amount"));
        showOption.innerHTML = "now your amount is "+ (deposite+balance)
    }
    else if (Number(storeOption) === 3) {
        parentOption.classList.add("hidden");
        withDraw = parseInt(prompt("enter amount for withdraw"));
        if(withDraw > balance) {
            showOptionError.innerHTML="you have not enough balance";
        }
        else {
            showOption.innerHTML = "you have withdrawn "+withDraw+" now your current balance is  "+(balance - withDraw)
        }
    }
    else if (Number(storeOption) === 4) {
         parentOption.classList.add("hidden");
          showOptionError.innerHTML = "you are out to the atm"
    }
    else {
        showOptionError.innerHTML = "you entered wrong option please try again"
    }
})





