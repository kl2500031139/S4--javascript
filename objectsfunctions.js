let student = {
    id:2500031139,
    name:"ojesvi",
    course: "FDW",
    year:2,
    address: {
         doorno:"48-8/9",
         city:"vijayawada",
         state:"AP"
    }
}

// Accessing the properties of objects
// 1 . using dot notation
console.log("student id:",student.id)
console.log("student name:",student.name)

// 2 . using bracket notation
console.log("course name:",student['course'])
console.log("year:",student['year'])

console.log("adress:",student.address)
console.log("city:",student.address.city)

// Creating an object using the new keyword

function Student(id, name, grade) {
    this.id = id;
    this.name = name;
    this.grade = grade;
}

let stu1 = new Student(2500031139, "ojesvi", "A+");
let stu2 = new Student(2500030876, "rajesh", "O");

console.log("stu-1-id:", stu1.id);
console.log("stu-1-name:", stu1.name);
console.log("stu-1-grade:", stu1.grade);

console.log("stu-2-id:", stu2.id);
console.log("stu-2-name:", stu2.name);
console.log("stu-2-grade:", stu2.grade);

//Define a class and create an object using new keyword
class Employee {
    constructor(id, name, designation, salary) {
        this.id = id
        this.name = name
        this.designation = designation
        this.salary = salary
    }
    display() {
        console.log("Employee Id: ", this.id)
        console.log("Employee Name: ", this.name)
        console.log("Employee Designation: ", this.designation)
        console.log("Employee Salary: ", this.salary)
    }
}
let emp1 = new Employee(5892,"Venkatesh","Asst.Prof",85000)
let emp2 = new Employee(9834,"Ramya","Assoc.Prof",125800)
emp1.display();
emp2.display();

// adding property to an object dynamically
student.grade = "o"
console.log("student information after addind the grade property:")
console.log(student)

// Deleting the property from an object dynamically
delete student.address
console.log("student information after deleting the address property:")
console.log(student)


// Destructuring of things

let {id,name,course,year} = student
console.log("destructured values:")
console.log("id:", id)
console.log("name:", name)
console.log("course:", course)
console.log("years:", year)