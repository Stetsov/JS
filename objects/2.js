/*02-make-pairs
* Task description: Write a method that returns a deep array like [[key, value]]
* Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]*/

function makePairs(a) {
    console.log(Object.entries(a));
}

let obj = {
    a: 1,
    b: 2,
}
makePairs(obj);


