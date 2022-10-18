/*05-is-equal
* Task description: Write a method that makes a shallow compare of two objects
* Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true*/
function checkSame(obj1, obj2) {
    console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
}

let obj1 = {
    a: 1,
    b: 1,
}
let obj2 = {
    a: 1,
    b: 1,
}
checkSame(obj1, obj2);