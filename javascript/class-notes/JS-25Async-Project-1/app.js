fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((data) => showScreen(data.meals))
  .catch((err) => console.log(err));

  function showScreen(data){

  const mealsDiv= document.querySelector(".food")

data.forEach((a)=>{

mealsDiv.innerHTML+=`
<div class="col-md-3 m-1">
<p>${a.strMeal} </p>
<img style=width:200px src="${a.strMealThumb}"/>
</div>

`

})



  }

