// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//!1- klasik yöntemle tanımlanan String  ilkel (primitive) dir
const str1="clarusway"
const str2="hello"
const str3="all the world"
console.log(str1+str2, typeof(str1+str2));

//!2- String constructor ile tanımlanan String non-primitive (ilkel olmayan) dir

const str4=new String("yeni bir String")
console.log(typeof str4);


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

//* -------------------------------------------------------------------------- */
//*                         STRING YAPISI VE INDEXLEME                         */
//* -------------------------------------------------------------------------- */
let course="clarusway"
console.log(course[0]);
console.log(course[4]);
console.log(course.length);

course[2]="A"
console.log(course);

// Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
// immutable - not mutable
course="full stack"
console.log(course);

//! ************STRING METHODS ************
// String metodları () kullanılır. 
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.
//! -------------------------------------------------------------------------- */
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.


// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

const s1="hello"
const s2="world"
console.log(s1.concat(s2));
console.log(s1);

const s3=s1.concat(s2)+"naber"
console.log(s3);
//!orjinal değeri değiştirmez, assigning ile kalıcı değiştirebilirsiniz

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

const myName="Ashley Miller"

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(myName.toLocaleUpperCase("tr"));

//!toLocaleUpperCase("tr")= Türkçe olarak kelimeyi büyüt demek
//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const isEqual=(str1,str2)=> str1==str2.toLocaleUpperCase("tr")?"eşittir":"eşit değildir"

console.log(isEqual("İSMET","ismet"));
console.log(isEqual("ISMET","ismet"));


// *=========================================================
// *   charAt()
// *=========================================================

const s4="primitive \n  veri tiplerinin \n property ya \n da metodu olmaz."

// \t yazı 8 karakter içeriden başlar. \n alt satıra indirir
console.log(s4);
console.log( `primitive  
veri tiplerinin  property ya 
da metodu olmaz`)

console.log(s4.charAt(5));//t
console.log(s4.charAt(s4.length-1));


// *=========================================================
// !   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime="to be or not to be, that is The questions."

console.log(kelime.includes("TO BE"));//false
console.log(kelime.toUpperCase().includes("TO BE"));//true


//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.
console.log(kelime.includes("to be"));//true
console.log(kelime.includes("quest"));//true
console.log(kelime.includes(" "));//true
console.log(kelime.includes("to be",14));//false


// *=========================================================
// *   indexOf()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime1 = "to be or not to be, that is The questions.";

console.log(kelime1.indexOf("be"));//3

console.log(kelime1.lastIndexOf("be"));//16
console.log(kelime1.indexOf("the")); //-1 olmayan karakter için -1 i döndürür

console.log(kelime1.indexOf("be",4));//16

console.log(kelime1.indexOf("be",kelime1.indexOf("be")+1));//16

// *=========================================================
// *   search()  
// *=========================================================

const kelime2 = "to be or not to be, 5 that is The questions.";

//!REGEX- regular expression

console.log(kelime2.search(/[A-Z]/));//30. büyük harfi buldu ve index ini döndürdü
console.log(kelime2.search(/[a-z]/));//0
console.log(kelime2.search(/[0-9]/));//20
console.log(kelime2.search(/[.]/));//43
console.log(kelime2.indexOf("."));//43

console.log(kelime2.search(/[^a-z]/));
console.log(kelime2.search(/[^0-9a-zA-Z]/));// rakam küçük ve büyük harf dışındaki ilk karakteri döndür

console.log(kelime.toUpperCase().search(/[aeuüıioö]/i));//i=incase sensitive, büyük küçük harfi önemseme

//* ----------------------------------------------------------
//! startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------

const kelime4 = "Salına salına  sinsice olurum sana!";

console.log(kelime4.startsWith("sa"));//false
console.log(kelime4.startsWith("Sa"));//true

console.log(kelime4.endsWith("sana!"));

console.log(kelime4.startsWith("salına",7));//true 7. karakter ile başla 7 dahil

console.log(kelime4.endsWith("salına",13));//true 13. karaktere kadar gel ama 13 dahil değil

//* ----------------------------------------------------------
//!  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku = "Oku Johny gibi saf olma saf olma saf olma";

 oku= oku.replace("saf olma", "başarılı ol")
console.log(oku);

// Oku Johny gibi başarılı ol saf olma saf olma
console.log(oku.replace(/SAF/i, "fakir"))

//* /SAF/i şeklinde bir yazım incase sensitive (büyük küçük harfe takılma)

console.log(oku.replace(/Saf olma/gi, "zengin ol"));

//! gi ile yazılırsa hem bütün saf olma ları seçer, hem de incase sensitive

//?ReplaceAll()
let oku2 = "Oku Johny gibi SAF olma saf olma saf olma";

console.log(oku2.replaceAll("saf olma", "akıllı ol"));


//* ----------------------------------------------------------
//!  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel = "UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";


console.log(veysel.slice(10));//BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";
console.log(veysel.slice(17,21));//DAYI. 21 dahil değil
console.log(veysel.substring(17,21));//DAYI

console.log(veysel.slice(-10));//UNDUZ GECE sondan saymaya 1 den başlıyoruz
console.log(veysel.slice(-10,-6));//UNDU. yine -6 dahil değil

console.log(veysel.slice(veysel.length-4,veysel.length-2));
//! substring de - index çalışmaz
console.log(veysel.substring(-10));

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------


const tarkan = "Gel gündüzle gece olalım";

console.log(tarkan.split());// 1 elemanlı diziye çevirir
console.log(tarkan.split(" "));// boşluklardan virgülle ayırılmış 4 elemanlı dizi
console.log(tarkan.split(""));
console.log(tarkan.split("e"));//e harflerinden virgülle ayrılan bir dizi
 console.log(tarkan.split("e",3));//dizinin 3 elemanını al

 console.log(tarkan);