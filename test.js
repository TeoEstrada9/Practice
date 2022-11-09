// declaration of variables
var result;
var mySalary;
var taxes;
var budget;

// inalziation of variables
mySalary = 5000;
taxes = 500;
budget = 100;


// creating a function 
function myNetIncome(salary,tax,budget)
{
    var calculation;
    calculation = salary - tax - budget;
    return calculation;
    
}

// calling the function 
result = myNetIncome(mySalary,taxes, budget);

console.log(result);






