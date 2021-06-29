var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let emptyArr = [];

for (let i = 0; i < mix.length; i++){
    let items = mix[i];
    emptyArr.push(typeof items);
}

console.log(emptyArr)