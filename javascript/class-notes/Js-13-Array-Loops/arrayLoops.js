//& foreach method
// Break ve continue kullanılamaz
// Void bir metotdur return etmez
// Normal for a göre daha yavaş çalışır
// Empty elamanları atlar
// orjinal array i değiştirmez


// const prices = [100,200,300,400,50,70];

// prices.forEach((a)=>console.log(a))
// Array elamalarının toplamını al

// let toplam = 0;

// prices.forEach((a)=>toplam += a)

// console.log(toplam / prices.length)


// Tüm elamnların iki katını alarak orjinal array ideğiştir.

/* const prices2 = [100,200,300,400,50,70];

prices2.forEach((price,i,arr)=>{
    arr[i] = price*2

})

console.log(prices2)

const prices3 = [100,200,300,400,50,70];

prices3.forEach((price)=>{
    // if(price == 200)break //! break kullanamayız
    // if(price == 200)continue //! Continue kullanmayız
    console.log(price)

}) */

//& Map Method

//verilen array elamanları üzerinde istenilen işlemleri yaparak yeni bir array return eder.
//Orjinal array bozmaz

/* const cars = [ 'audi','ferrari','bmw','fiat','Skoda']


const newCars = cars.map((car)=> car.toUpperCase())

console.log(newCars)
console.log(cars)
 */

/* const prices4 = [100,200,300,400,50,70];
console.log(prices4)
//300 tl üzerinde olanlara %20 altında olanlara %50 zam yapılacak

prices4.map((price,i,arr)=>{
    
    if(price >= 300){
        arr[i] = price * 1.2
    }else{
        arr[i] *= 1.5
    }

}) */

// console.log(prices4)

//? Dizi içindeki tüm elemanların € ve $ karşılıklarını map ile yazdırın

const prices5 = [100,200,300,400,50,70];
console.log(prices5)

const dolar = 30.2
const euro = 33.6

const dolarArr = prices5.map((price)=> +(price / dolar).toFixed(2))

console.log(dolarArr)

const euroArr = prices5.map((price)=> +(price / euro).toFixed(2))

console.log(euroArr)

//& Filter Method