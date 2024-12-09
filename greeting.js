function getAge(dob){
    let currentDate = new Date();
    let dobDate = new Date(dob);
    let age = Math.floor((currentDate-dobDate)/(1000*60*60*24))/365; // convert miliseconds to days
    
    return `Age: ${Math.floor(age)}`;
}

function Greet(name, dob){
    return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`; // capitalize first letter of name
}

let name = prompt("Enter your name: ");
let dob = prompt("Enter your DOB (YYYY-MM-DD): ");

console.log(Greet(name));
console.log(getAge(dob));