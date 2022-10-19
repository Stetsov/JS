/*08-is-equal-deep
* Task description: Write a method that makes a deep compare of two objects
* Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true*/
function checkSame(obj1, obj2) {
    console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
}

let obj1 = { a: 1, b: { c: 1 } };
let obj2 = { a: 1, b: { c: 1 } };
checkSame(obj1, obj2);