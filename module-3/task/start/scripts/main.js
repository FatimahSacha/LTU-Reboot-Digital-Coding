const productName = 'Chocolate Milk';
let price = 2.00;
let quantity = 10;

let inStock = true;
let discountAmount = 0.50;

//console.log(productName);
//console.log(price)

/*function showProductName() {
    console.log('productName,');
}
showProductName('');

function myName(name, age) {
    console.log('Hi', name, 'and i am am', age);
}
*/

/*function square(num){
    return num*num; //anything you put in return it will ignore it. if it is important put it above the return variable.
}

let squareFour = square ( 4);
console.log( squareFour);

console.log(square ( 4) );

function totalPrice(productPrice, productQuantity) {
    console.log(productPrice*productQuantity);
}

totalPrice(price, quantity);

function totalPrice(productPrice, productQuantity) {
    console.log(productPrice*productQuantity);
}
totalPrice(price, quantity);


let greetings = name => console.log(name);*/

//function checkAvailability(productInStock) {
    //console.log(productInStock);
//}

//checkAvailability(inStock);

/*let checkAvailability = (productInStock) => { //arrow functions
    console.log(productInStock);
}*/

//checkAvailability(inStock);

//let checkAvailability = productInStock => console.log(productInStock);
//checkAvailability(inStock);

/*let num = 10;
if (num ===50){
    console.log('number is higher than 50');
} else {
    console.log('number is less than 50');
*/

/*function productDiscount() {
    if (quantity>5){
        let newPrice = (price * quantity) - discountAmount; //BODMAS
        console.log(newPrice);
    } else {
       console.log( price*quantity);
    }
}*/

/*let color = 'pink';
let sky = 'blue'
if (color === 'red' && sky==='blue'){
    console.log('correct')
} else if(color=== 'purple'){
    console.log('correct');
}else{
    console.log('incorrect');
}

switch (color) {
    case 'red': // case means 'in this case if the color is red'
        console.log('correct');
        break; // the break statement is used to stop the switch outcome
        case 'purple':
            console.log('correct');
            break;
        default:
            console.log('incorrect');
            break;
}
*/

/*function drink0rder(drink, size){
    switch (drink){
        case 'Coke':
            console.log(drink, size);
            break;
        case 'lemonade':
            console.log(drink, size);
            break;
        default:
           // console.log("We don't have " + drink + " " + size +" , apologies"); 
            console.log(`we dont have a ${size} ${drink}, apologies`); // dollar sign used for space
            //if using apostrophe then use double quotation
            break;
        
    }
}

drink0rder('cola', 'X-large');
drink0rder('lemonade', 'X-large');
drink0rder('pepsi', 'large');*/

/*function calculator( num1, num2, operator){
    switch (operator){
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case '/':
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
            default:
                console.log(`${operator} does not exist`);
            break;
            
    }
}

calculator (1, 1, '+');
calculator (18, 10, '-')
calculator (35, 78, '*')
calculator (50, 5, '/')

let firstName = 'fatimah';
let lastName = 'Sacha';

let fullName = firstName + " " +  lastName;
console.log(fullName);

let num=56;
let word=89;
let numWord = num+ " " + word; //concatenate 
let numWord = `${num} ${word}`; // template literals
console.log(numWord);*/

/*let temp=40;
let season='winter';

if (temp >=79 || season==='spring'){
    console.log('you should turn it down');
} else if ( season !=='spring'){
    console.log('not spring')
}else {
    console.log('wear a coat');
}*/

//let product = [productName, price, quantity, inStock, discountAmount];

//console.log(product);

//console.log(product [2]);
//product[2]=5;

/*console.log(`before: ${product[2]}`)
product[2]=5;
console.log(`After: ${product[2]}`)*/

/*let firstItem = product[0];
let secondItem = product[1];
let lastItem = product[4];*/

let product={
    productName: 'sweets',
    price: 1.50,
    quantity: 15,
    inStock: true,
    discountAmount: 0.50,
    typesAvailable: ['chewits', 'vimto', 'starbusts', 'cola bottles' ],
};

/*console.log(product.price); // dot notation

console.log(product['price']) // square bracket notation

console.log(product.quantity);

console.log(product['type of sweets'])

let nameOfProduct = product.productName;
let discount = product['discountAmount']*/// to rename it

//you can change the names : hotel.name='park';

//to add properties hotel.parkingSpaces=40;

// to delete something delete.hotel.parkingSpaces

//let starbust = products['typesAvailable'][2];

//console.log(yellow);

//console.log(product);
//delete product.price;//hot to delete a property from a object

/*console.log(product.price);
let newPrice = product.price = 3.50;
console.log(newPrice);


product.flavour = 'toffee'
console.log(product);//how to add new products


let numbers = [1, 2, 3, 4, 5]
//console.log(numbers[0]);
//console.log(numbers[1]);
//console.log(numbers[2]);
//console.log(numbers[3]);

for (let counter=0; counter <=4; counter++ ) {
console.log(numbers[counter]);
}

for (let number = 1; number<=10; number++ ) {
    console.log(number); // console log numbers 1 - 10
}*/
//you dont need an array for a loop 

//console.log(shoppingBasket);

function totalPriceOfShopping (arr) {
    let totalPrice = 0;

    for (let counter=0; counter < arr.length; counter ++){

        totalPrice = totalPrice + arr[counter].price * arr[counter].quantity // BODMAS

       // console.log(totalPrice);

        // totalPrice = 0
        //0=0 +1.20*1 
        // 1.20 = 1.20 + 1.79 * 1
        // 2.99= 2.99 + 2.50 * 2
        // 7.99 = 7.99 + 3.25 +2 
        //console.log(arr[counter].price * arr[counter].quantity);
    }
         return totalPrice.toFixed(2); // to get  number 2 points after decimal point
          //return saving in memory and accessing later
         
}

//console.log(` Total Price : £${totalPriceOfShopping (shoppingBasket)}`);

function discountToiletries (arr){
    let totalPrice = 0;

    for(let counter= 0; counter < arr.length; counter ++){

        if (arr[counter].type === 'toiletries'){
        totalPrice = totalPrice + (arr[counter].price / 2) * arr[counter].quantity; //BODMAS
        } else{
            totalPrice = totalPrice + arr[counter].price * arr[counter].quantity
        }
        //console.log(arr[counter].type);
    }  

    return totalPrice.toFixed(2);
}

//console.log(` Total Price : £${discountToiletries(shoppingBasket)}`);


/*do psuedocode here to breakdown steps
 there is shopping basked containing different items 

 from this shopping basket we need to know how many of each item exists in a particular type

 let totalAmount =0;

 how am i going to cycle over the information (shopping basket)?

 for(start counter, condition inccrement){}

 select the first item 
    check what type of type it is 

if (items.type === type you are looking for){

    totalAmount + items.quantity;
}

 when you have gone through all the items and set aside all the items that are a particular type
 WHEN THE LOOPS CONDITION HAS BEEN MET END THE FOR LOOP

 check the quantities of each item and add them to your total 
    display the total 

 Return totalAmount

 */


function discount( arr, discountNum, type ) {
    let totalPrice = 0;
    
    for(let counter= 0; counter < arr.length; counter ++){

        if (arr[counter].type === type){
        totalPrice = totalPrice + (arr[counter].price - discountNum) * arr[counter].quantity; 
        } else{
            totalPrice = totalPrice + arr[counter].price * arr[counter].quantity
        }
    }  

    return totalPrice.toFixed(2);
}

//console.log(discount(shoppingBasket, 1.50, "dairy"));

function howMany ( arr, type) {

    let totalAmount = 0; 

 for (let counter = 0; counter < arr.length; counter++) {

    if(arr[counter]. type === type) {
        totalAmount = totalAmount + arr[counter].quantity;
    }
 }
 return totalAmount.toFixed(2);


}

//console.log(` Total Price : £${howMany(shoppingBasket, "dairy")}`);
// total should be 9


/*
7 times table

for loop:
    start of loop 
    condition 
    increment / step

    start = 1
    start <= 12 (loop ends at 12)
    start + 1 (++)

*/



function multiplyBy(num) {  // function = code you want to use multiple of times
    for (let counter =0; counter <= 12; counter++ ) {

        let result = counter * num;

        let message = `${counter} * ${num} = ${result}`;
    
        //console.log(message);
    }
}        

//multiplyBy (3);
//multiplyBy (6);

let books = [
    {
        title: 'Before I sleep' ,
        author: 'S . J Watson' ,
        hasRead: true ,
    }, 
    {
        title: 'Famous five' ,
        author: 'Enid Blyton' ,
        hasRead: true , 
    }, 
    {
        title: 'Harry potter' ,
        author: 'J.K. Rowling' ,
        hasRead: false , 
    }  
];

for (let index = 0; index < books.length; index++){
   // console.log(books[index].hasRead);

    if (books[index].hasRead) {
        console.log(`You have read : ${books[index].title}`);
    } else {
        console.log(`You have not read: ${books[index].title}` );
    }
}


/* books.forEach(book => console.log(book)); */ 

