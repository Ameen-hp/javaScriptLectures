const prompt = require("prompt-sync")();
let AddEmployees = []  // database
let enteredId = parseInt(prompt("enter id for employee"))
function Employee (name,id,salary,Department) {
          this.name  = name;
          this.id = id;
          this.salary = salary;
          this.Department = Department;



          
              AddEmployees.push(this)
          
}



const emp1 = new Employee("Ameen", 101, 50000, "IT", );
const emp2 = new Employee("Sara", 102, 55000, "HR", );
const emp3 = new Employee("Ali", 103, 45000, "IT", );
const emp4 = new Employee("Zara", 104, 60000, "Finance", );
const emp5 = new Employee("Hassan", 105, 48000, "Marketing", );
const emp6 = new Employee("Maria", 106, 52000, "Admin", );
const emp7 = new Employee("Usman", 107, 47000, "IT", );
const emp8 = new Employee("Nida", 108, 59000, "HR", );
const emp9 = new Employee("Bilal", 109, 53000, "Support", );
const emp10 = new Employee("Sana", 110, 62000, "Finance", );

let store = false;

AddEmployees.forEach(getObjects => {
      if(getObjects.id == enteredId) {
         store=true
         for(keys in getObjects) {
            console.log(keys+": "+getObjects[keys])


         }
      }
      
})

if(store) {
    console.log("Employe exist");
}
else {
    console.log("Employee Does Not exist")
}