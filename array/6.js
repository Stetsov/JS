/*06-unique
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]*/


function zad6(a){
    a.sort();
    let arrClean = [];
    let j = 0;
    // arrClean[0] = a[0];
    //console.log(a + ' :After sort');
    for (let i = 0; i<a.length;i++){
        if(a[i] !== a[i+1] ){
            arrClean[j] = a[i];
            j++;
        }
    }

    console.log(arrClean);
}

let arr = [1, 2, 3, 1, 2,4, 4, 2, 1, 4, 3,7];
//console.log(arr + ' :Start');
zad6(arr);