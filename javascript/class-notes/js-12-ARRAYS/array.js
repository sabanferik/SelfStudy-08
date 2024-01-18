// const arr = [1, 'İki', 3]

// const arr1 = new Array(1, 'İki', 3)

// console.log(arr)
// console.log(arr1)

// const arr2 = new Array(100)

// console.log(arr2)

// let bosArr = []

// console.log(bosArr)

// const car = ['Ford', 'Fiat', 'BMW']

// car = ['mercedes'] // hata verir

// car[3] = 'Mercedes'


// car[3] = 'Audi'
// console.log(car)

// car[10] = 'Mercedes'


// car[8] = 'Ferrari'
// console.log(car)

// console.log(car[9]) //undefined
// console.log(car[2]) //BMW

// console.log(car.length)

// console.log(car[car.length-1]) //Array in son elamanını getirir.


// console.log(typeof car)

// const x = 0

// console.log(Array.isArray(car)) //true
// console.log(Array.isArray(x)) // false

// console.log(car instanceof Array) //true
// console.log(x instanceof Array) //false

// const meyve = ['Elma','Kivi', 'portakal']
// const meyve2 = ['Elma','Kivi', 'portakal']


// console.log(meyve == meyve2) //false
// console.log(meyve === meyve2) //false
// console.log([] == []) //false

// const meyve3 = meyve

// console.log(meyve == meyve3) //True
// console.log(meyve3)
// console.log(meyve)

// meyve[3]= 'Armut' //Meyvede yapılan tüm değişiklikler meyve 3 ü de etkiler.
// console.log(meyve)
// console.log(meyve3)


// let dob = 2000

// let color = 'red'
// color = 'yellow'



// const arr = [color,2024 - dob,'Yas']

// console.log(arr)


// const arr2 = [color, 'Bir', [1,2,3,true,[]], {},false]

// console.log(arr2)

// console.log(arr2[2])
// console.log(arr2[2][3])

// arr2[2][4] = arr2
// console.log(arr2[2][4])
// console.log(arr2)


//! Array Metotları

//& Slice()

/* const colors = ['Red','Green','Blue', 'Yellow','Brown']

const colors2 = colors.slice() //parametre vermezsek tümünü kopyalar. */

//colors[5] = 'White'  //colors2 yi etkilemez, değiştirmez


// console.log(colors)
// console.log(colors2)

// const colors3 = colors.slice(2) //İkinci parametreyi vermezsek ilk parametrenin olduğu yerden sona kadar böler.
// console.log(colors3)

// const colors4 = colors.slice(2,4) // 2 den 4'e kadar kısmı alır. + hariçtir

// console.log(colors4)

/* console.log(colors[-1]) // undefined negatif indexle çağıramayız.

const colors5 = colors.slice(-2)

console.log(colors5)

console.log(colors.slice(-4,-1)) //Green, blue yellow
console.log(colors.slice(-2,-4)) // limit dışı boş array
console.log(colors.slice(2,-2)) // Blue
console.log(colors.slice(-2)) // Son iki elemanı getiri */

//& Push() Array in sonuna elaman ekler ve yeni arrayin elaman sayısını return eder.


// const colors = ['Red','Green']

// let newLen = colors.push('Blue')

// console.log(newLen) //3

// console.log(colors.push('Yellow')) //4


// console.log(colors.push()) // length ile aynı oldu
// console.log(colors.push() * 5 ) 

// colors.push('Blue','pink') // verdiğimiz sıra ile sona ekler
// console.log(colors)


// const colors2 = ['Blue','Yellow']

// colors.push(colors2) // ['Red','Green',['Blue','Yellow']]


// colors.push(...colors2) //spread parametresi ile tek tek ekler

// console.log(colors) // ['Red','Green','Blue','Yellow']


//& pop() dizinin son elemanını siler. Sildiği elemanı return eder


/* const colors = ['Red','Green','Blue','Yellow']

const removedItem = colors.pop()

console.log(colors)
console.log(removedItem)
console.log(colors.pop())
 */

//& unshift() dizinin başına eleman ekler. Yeni oluşan dizinin uzunluğunu return eder.

/* const colors = ['Blue','Yellow']

const newLen = colors.unshift('Red','Green')

// console.log(colors)
// console.log(newLen)
// console.log(colors.unshift()) // Boş verirsek eleman sayısını verir

const colors2 = ['White','Brown']

// colors.unshift(colors2) //0 ıncı indexe array olarak ekler


colors.unshift(...colors2) //spread operatörü 2. arrayin tüm elamanlarını başa ekler
console.log(colors) */

//& shift() dizinin 0. indexindeki değeri siler sildiği değeri return eder.


/* const newColors = ['White', 'Brown', 'Red', 'Green', 'Blue', 'Yellow']

const silinenDeger = newColors.shift()

console.log(newColors)
console.log(silinenDeger)

//delete newColors[2] //indexi empty hale getirir çok kullanılan bir yöntem değil.
newColors[2] = undefined // delete yerine bunu kullanabiliriz
console.log(newColors) */