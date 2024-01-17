// STRING CODE CLASS
// REVIEW
// Property- Methods
//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur
//? lenght

/* let str = 'Hello World'

// console.log(str.length)

let uzunluk = (str)=>{
    return str.length
}

for (let i = 0; i <= uzunluk(str)-1; i++) {
    console.log(str[i])
    
} */

// console.log(uzunluk(str))






//! ************STRING METHODS ************
//& charAt()             Returns the character at the specified index.


/* let lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `

console.log(lorem.length)
console.log(lorem[200])
console.log(lorem.charAt(20) )

if(lorem.charAt(20) === 'y'){
    console.log('yes')
}else{
    console.log('no')
}
 */


// & charCodeAt()	        Returns the Unicode of the character at the specified index.
//& fromCharCode()	        Converts Unicode values to characters.

/* let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

console.log(lorem2.charCodeAt(0))
console.log(lorem2.charCodeAt(19)) */

//^ Sezar şifrelemesi. String alacak ve ikinci parametre sayı olacak. O sayı kadar kaydırma yapacak.

/* function cipher(str,shift){
    let result = ''

    for (let i = 0; i < str.length; i++) {
        
        let ciphedText = str.charCodeAt(i)+shift
        result += String.fromCharCode(ciphedText)
        
    }

    console.log(result)
} 

cipher('Hello world',4)*/

//^ Bir şifreli metin ve sayı alacağız. Text'in şifresini çözeceğiz

/* function deCipher(str,shift){
    let result = ''

    for (let i = 0; i < str.length; i++) {
        
        let ciphedText = str.charCodeAt(i)-shift
        result += String.fromCharCode(ciphedText)
        
    }

    console.log(result)
}
deCipher('Lipps${svph',4)
 */

//& concat()	            Joins two or more strings, and returns a new string.

/* let lorem2 = `Lorem Ipsum is simply dummy text `
let lorem3 = `of the printing and typesetting industry.`

console.log(lorem2 + lorem3)
console.log(lorem2.concat(' merhaba ',lorem3))
console.log('Hello '.concat('World!'))
 */


//& indexOf()	        Returns the index of the first occurrence of the specified value in a string.
//& startsWith()	    Checks whether a string begins with a specified substring.
//& endsWith()	        Checks whether a string ends with a specified substring.

// let lrm = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

// console.log(lrm.startsWith('Lorem',1)) //false
// console.log(lrm.startsWith('dummy',22)) //true

// console.log(lrm.indexOf('dummy')) //22
// console.log(lrm.indexOf('xyz')) // -1 aranan metnin belirtilen string içerisinde olmadığını belirtir.
// console.log(lrm.endsWith('industry.')) //true
// console.log(lrm.endsWith('Ipsum',11)) //true

//^ Verilen uzun text içerisindeki istenilen metnin bulunduğu tüm indexleri yazdıran fonksiyon

// let lrm = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

// function indexBul(str, char){
//     let index = 0

// if (str.indexOf(char,index) == -1) {
//     console.log(`Metin içerisinde ${char} bulunamadı`)
//     return
// }

    
//     while(str.indexOf(char,index) !== -1){
//         console.log(str.indexOf(char,index))
//         index = str.indexOf(char,index) +1 

//     }



// }

// indexBul(lrm,'dummy')
// indexBul(lrm,'e')


//& includes()	        Checks whether a string contains the specified substring.

/*  let lrm = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

console.log(lrm.includes('Ipsum'))
console.log(lrm.includes('IPsum')) //false
console.log(lrm.includes('Ipsum', 10)) //false 

let email1 = 'mark.m@clarusway.com' //'Valid Email'
let email2 = 'mark.mclarusway.com' //'Invalid email'

if(email1.includes('@')){
console.log('Valid Email')
}else{
    console.log('Invalid email')
} */


//& lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.

// let lrm = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

// console.log(lrm.lastIndexOf('e')) //58
// console.log(lrm.lastIndexOf('e',57)) //56



//& slice()	            Extracts a portion of a string and returns it as a new string.

// let lrm = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

// let lrm2 = lrm.slice() // Aynı metni kopyalamış oluruz

// let lrm3 = lrm.slice(lrm.indexOf('Ipsum'), lrm.indexOf('Ipsum')+5)
// let lrm4 = lrm.slice(5,-5) 
// let lrm5 = lrm.slice(-5,5) 

// console.log(lrm.slice())
// console.log(lrm2)
// console.log(lrm5)

//& substring()	        Extracts the part of a string between the start and end indexes.
// let lrm10 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
// console.log(lrm10.substring(6,11))
// console.log(lrm10.substring(11,6))
// console.log(lrm10.substring(-5,5))

// toLowerCase()	    Converts a string to lowercase letters.
// toUpperCase()	    Converts a string to uppercase letters.


// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.

//Pangram

/* let TR = 'Pijamalı hasta yağız şoföre çabucak güvendi'
let US = 'The quick brown fox jumps over the lazy dog'
let DE ='Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich. '


console.log(TR.toUpperCase())
console.log(TR.toLocaleUpperCase('tr-TR'))

console.log(DE.toUpperCase())
console.log(DE.toLocaleUpperCase('de-DE'))

// localeCompare()	    Compares two strings in the current locale.

console.log('ß'.localeCompare('B'))


console.log('ç'.charCodeAt(0))
console.log('c'.charCodeAt(0))
 */

/* let str = ' 1234 5678 9012 3456          '
console.log(str)
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd()) */


//1
/* const creditCardNumber = '1234-5678-9012-3456'; //'123456••••••3456'

const veiledCardNumber = (numberStr) => {
   return numberStr.split('-').join('').slice(0,6) + '******' +numberStr.slice(-4)
}
console.log(veiledCardNumber(creditCardNumber)) */

//2
/* function cardNumberReplace(creditCardNumber) {
    let a=creditCardNumber.replaceAll('-', '');
    a = a.slice(0, 6) + '******' + a.slice(-4);
    return a
}
const creditCardNumber = '1234-5678-9012-3456';
console.log(cardNumberReplace(creditCardNumber));  */

//3

// const creditCardNumber = (numbers) => {
//     return numbers.replace(numbers.slice(7, 14), "******").replaceAll("-", "");
//   };
//   console.log(creditCardNumber("1234-5678-9012-3456"));


//4 
// const creditCardNumber= '1234-5678-9012-3456' //123456******3456
// function Usercard(card) {

//    return card=creditCardNumber.split('-').join('').slice(0,6)+'******'+card.slice(-4)
   
// }
// console.log(Usercard('1234-5678-9012-3456'))


//5 
/* function numaraGizle(cardNo) {
    
    let tiresiz = cardNo.replaceAll("-", "");
  
    let yildizli = tiresiz.slice(0, 6) + "*".repeat(tiresiz.length - 10) + tiresiz.slice(-4);
  
    return yildizli;
  }
  
  let ornek = "1234-5678-9012-3456";
  let yildizli = numaraGizle(ornek);
  
//   console.log(ornek);
  console.log(yildizli);
 */

  //6. 

/*   function maskCreditCardNumber(cardNumber) {
    // Kredi kartı numarasını temizle
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');
  
    // Sadece ilk 6 ve son 4 hane görünür, geri kalanlar maskelenir
    const visiblePart = cleanedCardNumber.slice(0, 6) 
    // console.log(cleanedCardNumber.slice(-4))
    // const maskedPart = cleanedCardNumber.slice(6, -4).replace(/\d/g, '•')+cleanedCardNumber.slice(-4);
    const maskedPart = visiblePart.padEnd(12, '•')+cleanedCardNumber.slice(-4);
  
    // Formatlı kredi kartı numarasını döndür
    return maskedPart;
  }
  
  // Örnek kullanım
  const creditCardNumber = '1234-5678-9012-3456';
  const maskedNumber = maskCreditCardNumber(creditCardNumber);
  console.log(maskedNumber);  // Örneğin: '123456••••••3456' */

//& split ()

// let str = 'Hello World'

// /* console.log(str)
// console.log(str.split()) //tamamını tek bir array yaptı.
// console.log(str.split('')) // 11 elemanlı array yapar
// console.log(str.split(' ')) // 2 elemanlı array yapar */

// const creditCardNumber = '1234-5678-9012-3456';

// // console.log(creditCardNumber.split())
// // console.log(creditCardNumber.split(''))
// // console.log(creditCardNumber.split('-'))
// let arr = creditCardNumber.split('-')


// arr[2] = '****'

// console.log(arr)

// arr[1] =arr[1].slice(0,2)+'**'

// console.log(arr.join(''))


let a = 3;
let b = 5;

[a,b] = [b,a]

console.log('a',a)
console.log('b',b)
console.log([1,2])







// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// split()	            Splits a string into an array of substrings.
// toString()	        Returns a string representing the specified object.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

/* -------------------------------------------------------------------------- */

