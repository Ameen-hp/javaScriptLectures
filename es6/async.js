// // syncronous javaScript
// console.log("we are learning javaScript");
// console.log("we are learning python");
// console.log("we are learning java");


// asyncronouse javaScript 
// console.log("we are learning python");
// setTimeout(()=> {
//    console.log("we are learning javaScript")
// },2000)
// console.log("we are learning java");






// Api ==> application programming interface


function studentsData (id) {
    let students  = {
        id:2012118,
        name:"ali",
        no: "12312312"
    }
    console.log("sending students data .....")
  
    return new Promise((resolve,reject)=> {
         setTimeout(()=> {
         if(id == students.id) {
            resolve(students)
         }
         else {
            reject("students data not found")
         }
    },2000)
    })

}


function teachersData(id) {
  let teachers  = {
        id:123123123,
        name:"Anwawr",
        no: "12311231232"
    }

    console.log("sending teachers data .......")

    return new Promise((resolve,reject)=> {
         setTimeout(()=> {
        if(id == teachers.id) {
            resolve(teachers)
        }
        else {
            reject("teachers data not found")
        }
    },3000)
    })
}


// callback hell
// teachersData((data)=> {
//      console.log(data)  
//      studentsData((data)=> {
//           console.log(data)
//      })
// })



// promises

// studentsData(2012118)
// .then((getStudentData)=> {
//      console.log(getStudentData)
//      return teachersData(123123123)
// })
// .then((getTeachersData)=>{
//     console.log(getTeachersData)
// })


// async await 

 (async function () {
  
    try{
    let getTeachersData = await teachersData(123123123)
    console.log(getTeachersData)
    let getstudentsData = await studentsData(2012118);
    console.log(getstudentsData)
    }
    catch(err) {
        console.log(err)
    }

 })()