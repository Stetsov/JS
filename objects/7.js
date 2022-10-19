/*07-is-empty-deep
* Task description: Write a method that makes a deep check is an object empty
* Empty values: '', null, NaN, undefined, [], {}*/


function checkEmpty(obj) {
    for (let key in obj) {
        console.log(false);
        return;
        }
        console.log(true);
}

let obj1 = {
    a: undefined,
}
let obj2 = {
    a: 1,
    b: 1,
}
checkEmpty(obj2);
