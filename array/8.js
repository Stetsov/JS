/*8 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]*/


function zad8(a){
    let arrPlain = [];
    let d =0;
    //a.flat(Infinity);                /метод для слабаков
    for(let i = 0 ;i <a.length;i++){ //метод для крутых прогеров, которые не пользуются методами. ток тут надо ещё таких вложенных циклов ебануть побольше будет, чтоб на больше ситуций, так что имеет минусы данный метод
         if (a[i].length === undefined){
                 arrPlain[d]=a[i];
                 d++;
         }
         else {
             for(let j = 0 ;j<a[i].length;j++){
                  if (a[i][j].length === undefined){
                      arrPlain[d]=a[i][j];
                      d++;
                 }
                for(let s = 0;s<a[i][j].length;s++){
                      if(a[i][j][s].length === undefined){
                           arrPlain[d]=a[i][j][s];
                           d++;
                      }
                }
             }
          }
     }

    console.log(arrPlain);
}

let arr = [1, 2, [3, 4, [5]]];
//let arr2 = [1,[2,3],4,[5,[6,4]]]
zad8(arr);
