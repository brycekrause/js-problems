// Basic operation calculator

function divide(numerator, denominator=1){
    return (numerator/denominator).toFixed(2);
}
function multiply(num1, num2){
    return num1*num2;
}
function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num1-num2;
}

while (true){
    let num1 = parseInt(prompt("Enter a number: "));
    let operation = prompt("Enter the operation (+, -, *, /): ");
    let num2 = parseInt(prompt("Enter a number: "));
    
    if (isNaN(num1) || isNaN(num2)){
        console.log("Enter integer value!");
    }else{
        if (operation == "/"){
            console.log(`Result: ${divide(num1,num2)}`);
        }else if (operation == "*"){
            console.log(`Result: ${multiply(num1,num2)}`);
        }else if (operation == "+"){
            console.log(`Result: ${add(num1,num2)}`);
        }else if (operation == "-"){
            console.log(`Result: ${subtract(num1,num2)}`);
        }else{
            console.log("Invalid operation!");
        }
    }   
}