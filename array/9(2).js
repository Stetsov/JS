/*09-chunk
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]*/


function splitArray(arr,b){
    let arrPlain = [];
    let count = 0;
    let countArr = [];
    for(let i = 0; i < arr.length;i++){
        countArr[count] = arr[i];
        count++;
        if(count === b || arr.length - 1 === i){
            arrPlain.push(countArr);
            countArr = [];
            count = 0;
        }
    }
    console.log(arrPlain);
}

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let n = 2;
splitArray(arr1,n);
