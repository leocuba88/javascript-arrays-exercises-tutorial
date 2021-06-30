let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
const mergeTwoList = (integers) => {
   let evenArr = [];
    let oddArr = [];
    for (let index = 0; index < integers.length; index++) {
        const element = integers[index];
        if (element%2 === 0) {
            evenArr.push(element)
        }else{
            oddArr.push(element)
        }
        
    }
    const totalArr = oddArr.concat(evenArr);
    return totalArr;
}

console.log(mergeTwoList(list_of_numbers))
