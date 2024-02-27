import React, { useState } from 'react'

const Hooks = () => {
//!usestate hook u her zaman en üste yazılmalı
const [sayac, setSayac] = useState(0)
// let sayac=0

const arttir=()=>{
    // sayac+=1

    setSayac(sayac+1)//sayac=sayac+1
}

  return (
    <div className='container text-center'>
    <h2>****************************</h2>
    <h2>****************************</h2>
    <h1>USESTATE</h1>

    <h2>COUNT:{sayac}</h2>

    <button onClick={arttir}
     className='btn btn-primary'>ARTTIR</button>

    </div>
  )
}

export default Hooks