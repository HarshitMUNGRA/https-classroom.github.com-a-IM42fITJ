"use strict";
/*
Author: Harshit Mungra
Date: 9/14/2023
Description: Part of exercise 2 in PROG1700 
Break-Even Point The following steps calculate a company’s break-even point, the number of 
units of goods the company must manufacture and sell in order to break even: 
A. Assign the value 5000 to the variable fixed_costs.
B. Assign the value 8 to the variable price_per_unit.
C. Assign the value 6 to the variable cost_per_unit.
D. Assign the value fixed_costs divided by (the difference of price_per_unit and
cost_per_unit) to the variable break_even_point.
E. Display the value of the variable break_even_point in a console application.
*/
// DO NOT EDIT: The main function to house our program code 
function main()
{
    // input, assign values
    let fixed_costs = 5000;
    let price_per_unit = 8;
    let cost_per_unit = 6;
    
    
    //process
    //calculate the break_even_point
    let break_even_point = fixed_costs / (price_per_unit - cost_per_unit);

    //output
    console.log("Your break even point is " + break_even_point);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}