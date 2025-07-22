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

let selectDivElement = document.getElementById("div-element");


selectDivElement.insertAdjacentHTML("afterend","<h1>welcome to javaScript</h1>");

// console.log(document.body)