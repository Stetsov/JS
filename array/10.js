/* Task description: Write a method that creates an array of unique values that are included in all given arrays
* Expected Result: ([1, 2], [2, 3]) => [2]*/
//подумал для 10й задачи когда на вход два массива эт слишком просто. а вот если это двумерный, всё сильно интереснее.Обычная под название 10true. Решение:
function zad10(arr){
    let b = 0;
    let st = 0;
    for(let i = 0; i<arr[0].length;i++) {
        for (let j = 1; j < arr.length; j++) {       //цикл бежит по всем элементам кроме первого
            for (let l = 0; l < arr[j].length; l++) {  //цикл по внутрянке
                if (arr[0][b] === arr[j][l]) {
                    st++;
                    break;
                }
            }
        }
        if (st === arr.length-1){
            console.log(arr[0][b]);
        }
        st = 0;
        b++;
    }
}
let arr1 = [[1, 2], [1, 2],[1,2]];
zad10(arr1)

