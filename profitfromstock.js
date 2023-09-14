/"use strict"/;
/*
Author = Harshit Mungra;
Date = 09/14/2023;
Despriction = part 4 of exercise 2 in PROG1700
A. Assign the value 10 to the variable purchase_price.
B. Assign the value 15 to the variable selling_price.
C. Assign to the variable percent_profit, 100 times the value of the difference between
selling_price and purchase_price divided by purchase_price.
D. Display the value of the variable percent_profit in the console window.
*/
function main()
{
    
let purchase_price = 10;
let selling_price = 15;

let percent_profit = 100 * (selling_price - purchase_price / purchase_price);

console.log("Your total profit from stocks = " + percent_profit);

}