/*09-chunk
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]*/


function zad9(arr,b){
    let arrPlain = [];
    for(let i = 0;i<arr.length/b;i++){          //генерируем хрень для создания массива нужного вида. Без этого выдает ошибку
        arrPlain.push([]);
    }
    let d = 0;          //с помощью всяких счетчиков типа переменных бегаем по массиву и понимает что куда сунуть
    let j = 0;
    let t = 0;
    for(let i = 0; i<arr.length;i++){
        if(t===b){
            d++;
            t = 0;
            j = 0;
        }
            arrPlain[d][t] = arr[i];
        t++;
        j++;
    }
    console.log(arrPlain);


   /* for (let i = 0; i < arr.length; i += b) {            //есть способ для слабаков через методы . Но есть и для тру парней( смотреть выше)
        arrPlain.push(arr.slice(i, i + b));
    }
    console.log(arrPlain);

    */
}
let arr1 = [1, 2, 3, 4, 5,6,7,8,9,10]
let s = 4;
zad9(arr1,s);
