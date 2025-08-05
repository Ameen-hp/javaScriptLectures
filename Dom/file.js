// select an element by id 

// let selectElement = document.getElementById("heading-one")
// // selectElement.textContent = "welcome to javaScript"
// // selectElement.innerHTML = "welcome to the javaScript"


// console.log(selectElement)



// select elements by className 

// let selectElements = document.getElementsByClassName("h1");

// // console.log(selectElements)
// for(let i=0; i < selectElements.length;i++ ) {
//     // console.log(selectElements[i])
//     if(i==1) {
//         continue
//     }
//     else{
//         selectElements[i].innerHTML = "welcome to the javaScript Dom"
//     }
// }


// select an elemeny by tagName

// let selectElementByTagName = document.getElementsByTagName("p");

//  for(let i = 0; i < selectElementByTagName.length;i++) {
//     console.log(selectElementByTagName[i])
//     selectElementByTagName[i].textContent = "hello hi am Ameen"
//  }



// query selector 

// let selectELementByQuerySelector = document.querySelector(".h1");


// querySelectorAll 

// let selectElementByQuerySelectorALl = document.querySelectorAll(".h1");
// console.log(selectElementByQuerySelectorALl)



// traversing elements

// let selectParent = document.getElementById("parent")
// // let selecltFirstChild = selectParent.firstElementChild.nextElementSibling.nextElementSibling
// let selectLastElement = selectParent.lastElementChild.previousElementSibling.previousElementSibling

// console.log(selectLastElement)


// create element 

// let createNewELement = document.createElement("h1")
// createNewELement.textContent = "am element 1"
// console.log(createNewELement)

// let createNextElement = document.createElement("h2");
// createNextElement.textContent="am element 2"


// append element 
// let selectUl  = document.getElementById("parent");
// document.body.appendChild(createNewELement,createNextElement)
// document.body.append(createNewELement,createNextElement)
// console.log(document.body)


// insert ==>   insert(element,position)
// replace element


// let selectParent  = document.getElementById("parent");
// let position = selectParent.firstElementChild.nextElementSibling.nextElementSibling;

// let element  = document.createElement("li");
// element.textContent = "new element"

// selectParent.replaceChild(element,position)




// remove element 


// let selectParent = document.getElementById("parent")
// let selectSecondChild = selectParent.firstElementChild.nextElementSibling
// console.log(selectSecondChild)


// selectParent.removeChild(selectSecondChild)



// copy and paste an element


// let  selectParent = document.getElementById("parent");

// let copyElement = selectParent.cloneNode(true)

// console.log(copyElement)

// let selectNextParent = document.getElementById("nextParent");
// selectNextParent.appendChild(copyElement)

// console.log(selectNextParent)



// Insert Adjacent

// let selectDivElement = document.getElementById("div-element");


// selectDivElement.insertAdjacentHTML("afterend","<h1>welcome to javaScript</h1>");

// console.log(document.body)


// attributes
// let selectDiv = document.querySelector("div");
// // set Attribute
// selectDiv.setAttribute("id","parent")
// // getAttribute
// console.log(selectDiv.getAttribute("id"))
// // check attribute

// let checkAttribute = selectDiv.hasAttribute("child");
// console.log(checkAttribute)

// // remove attribute
// selectDiv.removeAttribute("id")
// console.log(selectDiv)

// // toggle

// selectDiv.toggleAttribute("id","child")
// console.log(selectDiv)



// use inline css with javaScript 

// let selectParent = document.getElementById("parent");
// using single way
// selectParent.style.color = "white"
// selectParent.style.backgroundColor = "black"

// using css with multiple styles

// selectParent.style.cssText = "background-color:black;color:white;font-size:40px; border:2px solid red;margin-top:100px"


// classList

// selectParent.classList.add("child")
// selectParent.classList.remove("child")
// selectParent.classList.toggle("java")
// selectParent.classList.toggle("java")
// console.log(selectParent)



// task 
// setOffWidth,setOffHeight,clientWidth,ClientHeight




// EventS
// click,dbclick,keydown,keyup
// function backgroudnChanger (){
//       selectCircle.style.backgroundColor="red"
// }
// let selectBtn = document.getElementById("btn")
// let selectCircle = document.getElementById("circle")
// selectBtn.addEventListener("keyup",backgroudnChanger)


// input event

let selectInput = document.getElementById("inp");
let store = ""
selectInput.addEventListener("input",(event)=> {
     store = event.target.value
    //  console.log(store)
})


let addButton = document.getElementById("add")
let selecth1 = document.getElementById("namePrin");
addButton.addEventListener("click",()=> {
    selecth1.textContent = "your name is "+ store
})