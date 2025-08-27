

export let getUserData =  ({name,age,address}) => {
       console.log(`
          here is the user data 
          Name : ${name},
          age  : ${age},
          address : ${address}
        
        `)
}


export  let calculateGrade = ({totalMarks,obtainMarks,name}) => {
     let percent  = Number((obtainMarks/totalMarks)*(100))
     console.log(percent)
     if(percent >= 60) {
        console.log("grde is C")
     } 
     else if(percent >= 70) {
        console.log("grade is B");
     }
     else if (percent >= 80) {
        console.log("grade is A")
     }
     else if (percent >= 90) {
        console.log("grade is A+")
     }
     else {
        console.log("panoti"+ percent)
     }
}