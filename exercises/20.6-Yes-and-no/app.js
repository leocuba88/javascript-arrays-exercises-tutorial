let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let auxVar = function(arrayElement){
    if (arrayElement === 0){
        return "woko";
    }else {
        return "wiki";
    }
};

let newArray = theBools.map(auxVar);
console.log(newArray)