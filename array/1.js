/*01-fill
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']*/

function nArray(a,b){
    let arr = [];
    for(let i = 0; i < a; i++){
        arr.push(b);
    }
    console.log(arr);
}

nArray(4, 'a');