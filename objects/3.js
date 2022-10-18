/*03-without
* Task description: Write a method that returns a new object without provided properties
* Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }*/

function getObject(obj, n){
    for( key in obj) {
        if (key === n) {
            delete obj[key];
        }
    }
   console.log(obj);
}

let obj = {
    a: 1,
    b: 2,
}
let n = 'b';
getObject(obj,n);
