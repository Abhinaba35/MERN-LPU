/*

const CSE01 = {
    name: "Rahul",
    address : "Kolkata , WB",
    BloodGroup: "O+",

    //methods
    getInfo: () => {}
}
//object store key - value pair and keys must be strings or symbols
const CSE02 = {
    name: "Rohit",
    address : "Delhi",
    BloodGroup: "A+",
}
//console.log(CSE01);
//console.log(CSE02);


//CRUD Operations

//R-read
const studentName = CSE01.name;
console.log("Student Name : " , studentName);


//U-update
CSE01.BloodGroup = "B+";
console.log("Updated Blood Group : ", CSE01.BloodGroup);

//Add a key-value pair
CSE01.College = "LPU";
console.log("Updated Object with College : ", CSE01);

//D-delete
delete CSE01.address;
console.log("Object after deleting address : ", CSE01);


*/

/*
const person = {
    name : 'Mohan',
    height: 2,
    weight: 55,
    college: 'LPU',
    rollno: 'CSE01',

    getBMI: function()  {

        const bmi = this.weight / this.height ** 2;
        console.log(`BMI of ${person.name} is: ${bmi}`);

        if(bmi < 20 ){
            console.log(`${this.name} is underweight`);
        }else if(bmi >= 20 && bmi < 25) {
            console.log(`${this.name} is normal weight`);
        } else if(bmi >= 25 && bmi < 30) {
            console.log(`${this.name} is overweight`);
        } else {
            console.log(`${this.name} is obese`);
        }
       
    },

};

person.getBMI();
person.weight = 90;
person.getBMI();


const allkeys = Object.keys(person);
console.log("All keys in person object: ", allkeys);
const allvalues = Object.values(person);
console.log("All values in person object: ", allvalues);
const allentries = Object.entries(person);
console.log("All entries in person object: ", allentries);
*/



//---------------------------------------------------------

/*
const person = {
    name: 'Mohan',
    height: 2,
    weight: 55,
    college: 'LPU',
    rollno: 'CSE01',

};

const whichKey = prompt("Enter the key you want to access in person object: ");
console.log("whichKey: ", whichKey);

const clg = person[whichKey];
console.log("Value of the key you entered: ", clg);

*/

//---------------------------------------------------------

// Shallow Copy Example
/*
const person1 = {
    name: 'Mohan',
    height: 2,
    weight: 55,
    college: 'LPU',
    rollno: 'CSE01',

};

const person2 = person1; // Shallow copy
person1.name = "Mohit";
person2.name = 'Rohit'; 

console.log("person1: ", person1);
console.log("person2: ", person2);
*/

// Deep Copy Example
const person1 = {
    name: 'Mohan',
    city: 'Delhi',
    marks: {
        math: 90,
        science: 85,
        english: 88
    }

};

const person2 = {...person1}; // Shallow copy
person2.name = "Mohit";

person2.marks.math = 95; // This will affect person1 as well

console.log("person1: ", person1);
console.log("person2: ", person2);
