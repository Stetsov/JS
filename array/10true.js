/* Task description: Write a method that creates an array of unique values that are included in all given arrays
* Expected Result: ([1, 2], [2, 3]) => [2]*/

function createUniqueValueInArrays(arr1,arr2){
    let arr = [];
    for(let i = 0 ; i < arr1.length; i++){
        for(let j = 0 ; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr.push(arr1[i]);
            }
        }
    }
    console.log(arr);
}

let arr1 = [1, 2]
let arr2 = [2, 3, 1]
createUniqueValueInArrays(arr1,arr2)

