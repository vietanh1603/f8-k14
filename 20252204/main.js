/*
|3| = abs(3)
uoc: la nhung so ma no chia het ( a % u = 0)
boi: la nhung thua so cua no (b % a = 0 )
so nguyen to la so chi chia het cho 1 va chinh no ( co 2 uoc )
trong lap trinh de tim so nguyen to minh quet (2 -> n-1 )

so hoan hao:
la so co tong cac uoc ( tru ban than no) bang chinh no

 */

// object
/*
 --------------------------array(mang or list)--------------------------------

 */

/*const numbers =[1,2,3,4,5]
const boxes = ['a' , 'b', 'c']
const a = [1, 'hihi']

let b = [1,3,5,7]
b = [2,44,35,8]
//console.log(b)
console.log(b.length)

//const lenght = a.length
//console.log(lenght)

const toString = a.toString() // =String(a) = '2,4,6,8'

console.log(b[0],  b.at(0))


// and more

a.push(10)
console.log(a)

// add more at first
a.unshift(100)
console.log(a)

// change value
a[0] = 1000
console.log(a)

// delete at last
a.pop()
console.log(a)

// delete at first
a.shift()
//console.log(a.join ('-'))
console.log(b)
b.sort()
console.log(b)
delete b[2]
console.log(b)

const c = ['1','2','2','4','5']
const d=[12,32,54,32]
const e =[2,4,5,]
console.log(c.concat(d, e))

console.log(typeof a)


 */

/*
-------------------------------------Object---------------------------------
group value into a variable ( nhom cac gia tri thanh bien)

array: a = [10, 3, 23 ] --> get a value by index

object get value by key
 */
/*
const name='vanh'
const age = 23 ;
const address = 'ha noi'
 */
 const info = {
     name: 'vanh',
     age: 23,
     address: 'ha noi',
     favoriteNumber: 16
 }

console.log(info['name'], info.name)

info.name = 'Eng'
info.fistName = 'ha'
info.info = 'hihi'
delete info.info

console.log(Object.keys(info))

console.log(Object.values(info))

console.log(info)






















































