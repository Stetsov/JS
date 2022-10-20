/*10-intersection-deep
* Task description: Write a method that finds all intersections of objects
* Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }*/
function checkIntersections(obj1, obj2) {
    let ans = {};
    for(let i in obj1){
        for(let j in obj2){
            if (i === j && JSON.stringify(obj1[i]) === JSON.stringify(obj2[j])){
                ans[i] = obj1[i];
            }
        }
    }
    console.log(ans)
}

let obj1 = { a: 1, b: { c: 3 } };
let obj2 = { c: 1, b: { c: 3 } };
checkIntersections(obj1, obj2);