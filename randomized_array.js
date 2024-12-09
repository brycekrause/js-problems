/* Get random range of numbers based on user input.
Calculate the MAX, MIN, SUM, and DIFFERENCE. */

function getRandom(min, max, count){
    var randomArr = [];
    
    for (let i =0; i < count; i++){ // assign random numbers to arr
        randomArr.push(Math.floor(Math.random()*(max-min+1)+min));
    }
    
    console.log(`Array: ${randomArr}`); // print the array
    
    var largest = 0; var smallest = 9999;
    for (let i =0; i < randomArr.length; i++){
        if (randomArr[i] > largest){
            largest = randomArr[i]; // get the largest
        }
        if (randomArr[i] < smallest){
            smallest = randomArr[i]; // get the smallest
        }
    }
    
    var sum = 0; var difference = 0;
    sum = largest + smallest; // calculate sum
    difference = largest - smallest; // calculate difference
    
    console.log(`Largest: ${largest}\nSmallest: ${smallest}`);
    console.log(`Sum: ${largest} + ${smallest} = ${sum}`);
    console.log(`Difference: ${largest} - ${smallest} = ${difference}`); // print everything
}

while (true){ // run forever
    let low = parseInt(prompt("Enter range start: "));
    let high = parseInt(prompt("Enter range end: "));
    let count = parseInt(prompt("Enter iterations: "));
    if (isNaN(low) || isNaN(high) || isNaN(count)){ // int check
        console.log('Please enter integer values!');
    }else{
        getRandom(low, high, count); // call the function w args
    }
}