console.log("myModule den selamlar");

 export const CALISMA_SAATI=40

 export function topla(s1,s2){
    return s1+s2
 }

 let counter=5;

 const inc=(miktar)=>
 counter+=miktar


 const dec=(miktar)=>{
    counter-=miktar
    console.log(counter);
 }

 const myName="Ashley"

 export {inc,dec,myName}


 //! bir sayfada 1 tane export default olabilir
 export default function ugurla(){
    console.log("görüşmek üzere JS");
 }