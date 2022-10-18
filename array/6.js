/*06-unique
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]*/


function returnDuplicate(a){
    a.sort();
    let arrClean = [];
    let j = 0;
    for (let i = 0; i < a.length; i++){
        if(a[i] !== a[i+1] ){
            arrClean[j] = a[i];
            j++;
        }
    }
    console.log(arrClean);
}

let arr = [1, 2, 3, 1, 2];
returnDuplicate(arr);