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

let lrm = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

console.log(lrm.startsWith('Lorem',1))
console.log(lrm.startsWith('dummy',22))

console.log(lrm.indexOf('dummy'))
console.log(lrm.indexOf('xyz')) // -1 aranan metnin belirtilen string içerisinde olmadığını belirtir.
console.log(first)



// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

/* -------------------------------------------------------------------------- */

