var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for (i = 0; i < chunk_one.length; i++){
        let newElement = chunk_one[i];
        newArray.push(newElement);
    }
    for (i = 0; i < chunk_two.length; i++){
        let newElement2 = chunk_two[i];
        newArray.push(newElement2);
    }

    return newArray;
    
 
}

console.log(mergeArrays(chunk_one, chunk_two));