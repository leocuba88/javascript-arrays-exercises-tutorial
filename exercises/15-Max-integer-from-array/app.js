var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];
var maxValue = 0;
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (element > maxValue) {
        maxValue = element;
    }
}
console.log(maxValue)