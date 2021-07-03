let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let nameStartWithR = function(letter){
    //return (letter > "R")
    return (letter[0] === "R")
}

let resultingNames = allNames.filter(nameStartWithR)



console.log(resultingNames);