/*04-from-pairs
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }*/


function zad4([arr]){
    let obj = {};
    for(let i =0;i<arr.length;i++){
        obj[arr[i][0]]=arr[i][1];
    }
    console.log(obj);
}
let arr = [['a', 1], ['b', 2]];
zad4(arr);