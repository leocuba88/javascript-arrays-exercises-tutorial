var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let newList = [];
    for (let i = 0; i < people.length; i++){
        let currentName = people[i];
        if (currentName !== personName){
            newList.push(currentName);
        }
        }
    return newList;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));