/*03-compact
 * Task description: Write a method that clears array
 from all unnecessary elements,
 like false, undefined, empty, strings, zero, null
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]*/

function zad3 (a){
    let arr = [];
    let j = 0;
    for(let i = 0;i<a.length;i++){
        if( typeof a[i] === typeof j ){
            arr[j] = a[i];
            j++;
        }
    }
    console.log(arr);
}
let arr = [1, 2, 'a', null, 3, 4, undefined]
zad3(arr);