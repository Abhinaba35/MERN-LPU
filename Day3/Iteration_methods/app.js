//console.log("Hello, World!");


const arr = ["Cat", "Dog", "Fish", "Bird"];

//for (let i = 0; i < arr.length; i++) {
//    const elem = arr[i];
//    console.log(i , elem);
//}


//for(let i in arr){
//    const elem = arr[i];
//    console.log(i, elem);
//}

//for(let i of arr){
//    console.log(i);
//}

//arr.forEach((elem, i) => {
//    console.log(i, elem);
//});

const myFunc = (elem , i) => {
    console.log(i, elem);
}

arr.forEach(myFunc);

