let lyricsGenerator = (arr) => {
    let arrBoom = [];
        arr.forEach((element, index )=> {
            if (element == 0){
                arrBoom.push("Boom")
            } else if (element == 1){
                arrBoom.push("Drop the base")
            } if (arr[index] == 1  && arr[index - 1] == 1 && arr[index - 2] == 1){
                arrBoom.push("!!!Break the base!!!")
            }
        });
        return arrBoom.join(" ")
    }



// let lyricsGenerator = (arr) => {
//     arr.forEach(element => {
//         if (element == 0){
//             console.log("Boom")
//         } else if (element == 1){
//             console.log("Drop the base")
//         }
//     });
// }



// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))