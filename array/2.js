/*   02-reverse
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]*/

function reverse (a){
    let arrReverse = [];
    let j = 0;
    for(let i = a.length-1; i >= 0; i--){
        arrReverse[j] = a[i];
        j++;
    }
    console.log(arrReverse);
}

let arr = [1, 2, 3, 4]
reverse(arr);