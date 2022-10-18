/*04-from-pairs
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }*/


function returnKey(arr){
    let obj = Object.fromEntries(arr);
    console.log(obj);
}

let arr = [['a', 1], ['b', 2]];
returnKey(arr);
