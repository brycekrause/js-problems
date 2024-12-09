// Get the youngest and oldest persons from an array

const names = ["John", "Bruce", "Amelia", "Steven"];
const dobs = ["1978-11-02", "1978-05-25", "1978-02-02", "1978-03-21"];

function ageDifferences(names, dobs){
    var youngest = 9999; var youngestIndex = 0;
    var oldest = 0; var oldestIndex = 0;
    
    for (let i = 0; i < dobs.length; i++){
        let dobDate = new Date(dobs[i]);
        let currentDate = new Date();
        let age = Math.floor(currentDate-dobDate)/(1000*60*60*24)/365;
        
        if (age < youngest){
            youngest = age;
            youngestIndex = i;
        }
        if (age > oldest){
            oldest = age;
            oldestIndex = i;
        }
    }
    return `Youngest: ${names[youngestIndex]}\nOldest: ${names[oldestIndex]}`;
}

console.log(ageDifferences(names, dobs));