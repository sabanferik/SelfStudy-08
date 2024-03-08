import React, { useEffect, useState } from 'react'

const UseEffectAxiosFetch = () => {
const[people,setPeople]=useState([])

//!1.yol fetch then yapısı (chain)
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => setPeople(data));
}, [])




  return (

    <div>
     {people.map((a)=>{
      return(
        <div>
          <h1>
            {a.name}
          </h1>
        </div>
      )
     })}
    </div>
  )
}

export default UseEffectAxiosFetch