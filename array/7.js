/*07-is-equal
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true*/


function IdenticalArray(a,b){
    if (a.length === b.length){
        for (let i = 0; i < a.length; i++){
            if(a[i] !== b[i]){
                console.log('false');
                return;
            }
        }
        console.log('true');
    }
    else
        console.log('false');
}

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
IdenticalArray(arr1,arr2);