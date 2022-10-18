/*05-without
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]*/


function returnArray(a){
    let arrClean = [];
    let b = 0;
    let d = 0;
    for(let i = 0; i < a.length; i++){
        b = -1;
        for(let j = 0; j < a.length; j++){
            if (a[i] === a[j]) {
                b++;
            }
        }
        if(b === 0){
            arrClean[d] = a[i];
            d++;
        }
    }
    console.log(arrClean);
}

let arr = [1, 2, 3, 1, 2];
returnArray(arr);