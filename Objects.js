
// Object
// identification of any thing 
// everything is a object if it has properties and methods 
// Example

// Student
// property = Name,Age
// Action = he can read,write,run,eat, // he perfoms Action byself


// Table
// propery = size,material,color
// Action = Laptop,  // Action was perfomed on table




let Student1 = {
    name:"Aman",
    age:20,
    Department:"Computer Sceince",
    Date_Of_Birth:"20-2-2000",
    Color:"White",
    CNIC:41501-13123123,
    Natioanlity:"Pakistani",
    Address:"TandoAllhyar"
}

// to print an Object

// console.log(Student1)

// how to print Object Properties
// console.log(Student1.name);
// console.log(Student1.age)

// How to store properties in variable and print them 
// let store  = Student1.name;
// let store2 = Student1.Address
// console.log("this is the name of student ",store,"this is the Address of Studnet", store2); 



// Update the properties of an object

// console.log(Student1);
// Student1["Color"] = "red";

// console.log(Student1)


// Delete Properties 

// delete Student1.Color,delete  Student1.Address, delete Student1.CNIC;
// console.log(Student1);



// to Add or Insert any property in object

// Student1.Semester = "2nd";
// console.log(Student1)



// to print all the keys and value of an object

// console.log(Object.keys(Student1));
// console.log(Object.values(Student1));



// for in loop
// used for to print the values and properites of object

for(keys in Student1) {
    console.log(keys, "=",Student1[keys])
}






