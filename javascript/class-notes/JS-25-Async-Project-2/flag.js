

const getCountry=async()=>{

    const res=  await fetch("https://restcountries.com/v3.1/all");
   
   
         const data=  await  res.json()
   
        printScreen(data)
   }
   
   getCountry()
   
   
   
   const printScreen=(countries)=>{
   
   countries.forEach((country)=>{
   
   document.querySelector("article").innerHTML += `
   <div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
     <img src="..." class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       
   <ul class="list-group list-group-flush">
     <li class="list-group-item"> </li>
     <li class="list-group-item"> </li>
     <li class="list-group-item">  </li>
     
   </ul>
   
   
     </div>
   </div>
   
   `;
   
   
   })
   
   
   }