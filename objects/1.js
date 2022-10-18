/*01-is-plain-object
* Task description: Write a method that verifies an argument is a plain object, not an array or null
* Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false*/
function checkObject(a){
    if (typeof a === 'object' && a !== null && !Array.isArray(a)) {
        console.log('True');
    }
    else
        console.log('False');
}

let obj  = ({a : 1});
checkObject(obj);