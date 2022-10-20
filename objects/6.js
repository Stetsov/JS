/*06-invoke
* Task description: Write a method that invokes an array method on a specific path
* Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]*/
function doSplice(obj, pos, num) {
    console.log(obj.a.b.splice(pos, num));
}

let obj1 = {
    a: {
        b: [1, 2, 3],
    }
}
let pos = 1;
let num = 2;
doSplice(obj1,pos,num);