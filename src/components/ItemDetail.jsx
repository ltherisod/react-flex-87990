import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({detalle}) => {
    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} unidades de ${detalle.name}`)
    }

  return (
    <div>
        <h2>Detalle de: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price}, 00</p>
        <p>Stock disponible: {detalle.stock} unidades</p>
        {/* OPCIONAL SEGUNDA PRE ENTREGA */}
        <ItemCount stock={detalle.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail