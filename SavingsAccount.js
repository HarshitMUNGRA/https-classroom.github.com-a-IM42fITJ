"use strict";
/*
Author: Harshit Mungra
Date: 9/14/2023
Description: Part of exercise 2 in PROG1700 
Savings Account The following steps calculate the balance at the end of three years when $100 
is deposited at the beginning of each year in a savings account at 5 % interest compounded 
annually: 
A. Assign the value 100 to the variable balance.
B. Increase the variable balance by 5 % of its value, and add 100.
C. Increase the variable balance by 5 % of its value, and add 100.
D. Increase the variable balance by 5 % of its value.
E. Display the value of balance (rounded to two decimal places) in the console window.
*/
// DO NOT EDIT: The main function to house our program code 
function main()
{
    // input, assign values
    let balance = 100;

    //process
    balance = balance*.5 + 100;
    balance = balance*0.5 + 100;
    balance = balance*0.5;

    //output
    console.log("Your totral balance after adding all promotions = " + balance);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}