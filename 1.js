/*01-fill
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']*/

function zad1 (a,b){
    let arr = [];
    for(let i = 0;i<a;i++){
        //arr[i] = b;
        arr.push(b)
    }

    console.log(arr);
}

zad1(4, 'a');