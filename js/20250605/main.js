/*
*  vong lap reduce
* */
// const array = [14, 25, 33, 4, 51];
// const initialValue = 0
// const someWithInitial = array.reduce((a,b) => {
//     console.log(a, b)
//     return a + b
// }, 0)
//
// console.log(someWithInitial)


const arr = [
    ['id', 1],
    ['name', 'test'],
    ['age', 23],
]

//--------------- cach 1 ------------------
// for (let i = 0; i < arr.length; i++) {
//     const key = arr[i]
//     console.log(key)
// }
//--------------cach 2-----------------
// const obj = arr.reduce((a,b) => {
//     const [key, value] = b
//     a[key] = value
//     return a
// })
// console.log(obj)

const result = arr.reduce((a, b) =>{
    const key = b[0]
    const value = b[1]
    a[key] = value
    return a
} );
console.log(result);





























