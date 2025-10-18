import React, { useState } from 'react'

const Input = () => {
    const [nombre, setNombre] =useState('')
    const inputHandler = (e)=> {
        console.log(e, 'evento')
         console.log(e.target, 'input')
         console.log(e.target.value, 'valor')
         setNombre(e.target.value)
    }
    const noVocales = (e) => {
        console.log(e.key)
        if('aeiou'.includes(e.key.toLowerCase())){
            e.preventDefault()
            alert('No vocales 🤭')
        }
    }

  return (
    <div>
        <h1>Input</h1>
        <input type='text' name='nombre' id='#nombre' placeholder='Ingrese su nombre' onChange={inputHandler}/>
        <p>{nombre}</p>
         <h2>Input sin vocales</h2>
        <input type='text' name='nombre' id='#nombre' placeholder='Ingrese su nombre' onKeyDown={noVocales} />
        
    </div>
  )
}

export default Input