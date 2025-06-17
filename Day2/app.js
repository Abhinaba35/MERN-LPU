//console.log("Hello World");

const printBillForFood = (txt) =>{
    console.log("---------------");
    console.log("Your Food Bill is Rs.", txt);
    console.log("---------------");
}


const printBillForDrinks = (txt) =>{
    console.log("---------------");
    console.log("Your Drinks Bill is Rs.", txt);
    console.log("---------------");
}

const printBillForClothes = (txt) =>{
    console.log("---------------");
    console.log("Your Clothes Bill is Rs.", txt);
    console.log("---------------");
}

const printBillForFoodsAndDrinks = (txt) =>{
    console.log("---------------");
    console.log("Your Food and Drinks Bill is Rs.", txt);
    console.log("---------------");
}


const printBillForDrinksAndClothes = (txt) =>{
    console.log("---------------");
    console.log("Your Drinks and Clothes Bill is Rs.", txt);
    console.log("---------------");
}

const printBillForFoodsAndClothes = (txt) =>{
    console.log("---------------");
    console.log("Your Foods and Clothes Bill is Rs.", txt);
    console.log("---------------");
}



const printBillForAll = (txt) =>{
    console.log("---------------");
    console.log("Total Bill is Rs.", txt);
    console.log("---------------");
}


const calculateBillAmountForFood = (Price) => {
    return Price + (Price * 0.05);
}

const calculateBillAmountForDrink = (Price) => {
    return Price + (Price * 0.2);
}

const calculateBillAmountForClothes = (Price) => {
    return Price + (Price * 0.12);
}

//Higher order function ----> The function which accepts another function as a parameter or returns a function as a result is called a higher order function (HOF).
//Callback function ----> The function which is passed as an argument to another function is called a callback function.
//Callback function is a type of higher order function.


const generateBill = (food, drink, clothes,cb) => {
    //HOF
    const foodAmount = calculateBillAmountForFood(food);    
    const drinkAmount = calculateBillAmountForDrink(drink);
    const clothesAmount = calculateBillAmountForClothes(clothes);
    const totalAmount = foodAmount + drinkAmount + clothesAmount;
    cb(totalAmount);
}

generateBill(100, 50, 200, printBillForAll); //printBillForAll  is a callback
generateBill(200,100,0,printBillForFoodsAndDrinks);//printBillForFoodsAndDrinks is a callback
generateBill(0, 100, 150, printBillForDrinksAndClothes);//printBillForDrinksAndClothes is a callback
generateBill(0, 0, 300, printBillForClothes);//printBillForClothes is a callback
generateBill(150, 0, 0, printBillForFood);//printBillForFood is a callback
generateBill(0, 200, 0, printBillForDrinks);//printBillForDrinks is a callback
generateBill(100,0,250,printBillForFoodsAndClothes); //printBillForFoodsAndClothes is a callback


