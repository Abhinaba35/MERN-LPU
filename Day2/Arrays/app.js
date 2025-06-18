//const arr1 = ["tata", "honda", "maruti", "audi", "bmw"];
//console.log(arr1);

//const arr2 = ["kia","toyota", "ford", "hyundai", "volkswagen"];


//Read
//1.
//const company = arr1[0];
//console.log(company);


//2.
//const [a,b,c] = arr1;
//console.log(a,c);

//const [x,y,z] = arr2;
//console.log(x,y,z);

//------------------------------------

//ADD

//const arr = [ "Tata", "Honda", "Maruti", "Audi", "BMW"];

//arr[10] = "kia";
//arr.push("Kia");
//arr.pop();

//arr.shift();
//arr.unshift("Toyota");

//arr.splice(2, 1, "Hyundai", "Ford"); // removing and adding elements
//arr.splice(3, 0, "Volkswagen"); // adding elements without removing
//arr.splice(2, 2); // removing elements
//console.log(arr);

//----------------------------------------


//find the index for honda

//const arr = ["Tata", "Honda", "Maruti", "Audi", "BMW"];
//const index = arr.indexOf("Honda"); 



//console.log(index);


//----------------------------------------


//find the index of the element whose name is "Raj" and city is "Delhi"
/*
const arr = [
    { name: "Raj", city: "Delhi" },
    { name: "Ravi", city: "Mumbai" },
    { name: "Amit", city: "Bangalore" },
    { name: "Sita", city: "Chennai" }
    ];


   // console.log(arr.findIndex({ name: "Raj", city: "Mumbai" }));
    //console.log(arr.findIndex({ name: "Raj", city: "Delhi" }));
    console.log(arr.findIndex((item) => item.name === "Raj" && item.city === "Delhi"));


    if({name: "Raj"} == {name : "Raj"})
    {
        console.log("Equal");
    }else
    {
        console.log("Not Equal");
    }
*/

/*
const person = {
    name: "Raj",
    city: "Delhi"
}

const person2 = {...person}

if (person === person2){
    console.log("True");
}else{
    console.log("False");
}

if({} == {}){
    console.log("True");
}else{
    console.log("False");
}

*/


//const arr = ["ab", "cd", "ef", "gh", "ij"];
//console.log(arr.includes("cd")); 



//-----------------------------------------


//const myFunc = (a,b,c,d) =>{
//    console.log(a, b, c, d);


//}
//const  arr = [ "ab", "xy", "cd", "ef", "gh", "ij"];

//const elem = arr.find(myFunc);

/*
//------------------------------------------
const myFunc = (a,b,c,d) =>{
    if(a === "cd"){
        return true;
    }else{
        return false;
    }


}
const  arr = [ "ab", "xy", "cd", "ef", "gh", "ij"];

const elem = arr.find(myFunc);
console.log(elem); 

*/

/*
const arr = [
    {name: "Raj", city: "Delhi" },
    {name: "Ravi", city: "Mumbai" },
    {name: "Amit", city: "Bangalore" },
    {name: "Sita", city: "Chennai" },
];

const myFunc = (a) => {
    if(a.name === "Raj"){
        return true;
    }else{
        return false;
    }
};

const ans = arr.find(myFunc);
console.log(ans);

*/

//------------------------------------------
/*
const arr = [
    {name: "Raj", city: "Delhi" },
    {name: "Ravi", city: "Mumbai" },
    {name: "Amit", city: "Bangalore" },
    {name: "Sita", city: "Chennai" },
];

const myFunc = (a) => {
    if(a.name === "Raj"){
        return true;
    }else{
        return false;
    }
};

const ans = arr.findIndex(myFunc);
console.log(ans);
*/

//------------------------------------------

const arr = [
    {name: "Raj", city: "Delhi", score: 85 },
    {name: "Ravi", city: "Mumbai" , score: 90 },
    {name: "Amit", city: "Bangalore", score: 21 },
    {name: "Sita", city: "Chennai" , score:32},
];

const myFunc = (a) => {
    if(a.score < 33){
        return {...a, status: "Fail" };
    }else{
        return {...a, status: "Pass" };
    }
};

const ans = arr.map(myFunc);
console.log(ans);