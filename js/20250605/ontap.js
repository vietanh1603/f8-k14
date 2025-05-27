const arr =[1,7,3,2,5,8,2]
/*
* log ra cac phep cong co kq bang 4
*
* */

// for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //         if (arr[j] + arr[i] === 4 && i != j) {
// //             console.log(i,j);
// //         }
// //     }
// // }
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] + arr[i] === 4 && i != j) {
            console.log(i, j);
            console.log(arr[j], '+',arr[i], '= 4');
        }
    }
}
// for (let i = 0; i < arr.length; i++) {
//         let max = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > max){
//                 max = arr[j];
//             }
//         }
//         console.log(max);
//     for (let j = 0; j < arr.length; j++) {
//
//     }
// }

