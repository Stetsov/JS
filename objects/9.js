/* Task description: Write a method that finds shallow intersections of objects
* Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }*/
function checkSameElements(obj1, obj2) {
    for(let i in obj1){
        for(let j in obj2){
            if (i === j && obj1[i] === obj2[j]){
                console.log(i + ' : ' + obj1[i]);
            }
        }
    }
}

let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
checkSameElements(obj1, obj2);