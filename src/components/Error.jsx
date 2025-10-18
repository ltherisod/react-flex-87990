import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1> La ruta no existe 😱</h1>
        <Link className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
  )
}

export default Error