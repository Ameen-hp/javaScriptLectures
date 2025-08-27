import { getUserData,calculateGrade } from "./methods.js";

let student1 = {
    name:"ameen",
    age : 23,
    address : "TandoAllhyar"
}
getUserData(student1)

let studentData = {
 totalMarks : 500,
 obtainMarks : 340,
 name : "Yahya",
}

calculateGrade(studentData)