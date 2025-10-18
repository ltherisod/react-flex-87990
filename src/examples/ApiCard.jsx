import React from 'react'

const ApiCard = ({personaje}) => {
    // console.log(personaje)
  return (
    <div className="card" style={{width:'18rem'}}>
  <img src={personaje.image} className="card-img-top" alt={personaje.name}/>
  <div className="card-body">
    <h5 className="card-title">{personaje.name}</h5>
    <p className="card-text">{personaje.race}</p>
  </div>
</div>
  )
}

export default ApiCard