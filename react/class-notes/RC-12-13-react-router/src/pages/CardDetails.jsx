import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data"
const CardDetails = () => {
  //router dan path olarak gelen namee burada useParams hook u ile yakalandı
 const {namee}=   useParams()


  return (
    <div className='container text-center mt-4'>

    {data.map((i)=>i.name===namee  && (
 <div>
 <h3>{i.name}</h3>
      <img src={i.img} alt="" width="300px" />
      <h3>{i.text} </h3>
      <h4>{i.yorum} </h4>
      <div>
        <button className='btn btn-warning'>a</button>
        <button className='btn btn-primary'>b</button>
      </div>

</div>
    ))}
     
    </div>
  );
}

export default CardDetails