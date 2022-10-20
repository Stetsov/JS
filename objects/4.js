/*04-is-empty
* Task description: Write a method that makes a shallow check is object empty
* Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false*/

function checkEmpty(obj) {
    let check = true;
    for (let key in obj) {
        if (obj[key] === undefined) {
            check = true;
        }
        else {
            check = false;
        }
    }
    console.log(check);
}

let obj = {
    a : 1,
}
checkEmpty(obj);