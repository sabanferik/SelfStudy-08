// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");


//! global scope (gökteki yildizlar gibi herkes görebilir)

let first=5;
let second=12;
let third=456;

console.log(first,second,third);

const scopeFuntion = () => {
    
    first=8;
// let ile yeni bir second olustu. ve disaridan erisilemez hale geldi.
    let second=45; 

    console.log(second);

    let fourth=1234

    return fourth
    // return fourth yazılır. fonksiyon dışında bunu görmek için call yapılan yeri console.log da yazdırmalıyız
}

 console.log( scopeFuntion());
console.log(first);
console.log(second);
// console.log(fourth);