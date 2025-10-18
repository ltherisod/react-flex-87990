
import ItemCount from './ItemCount'
//importo el hook para usar el contexto
import { useContext, useState } from 'react'
//importo el contexto que quiero usar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
  const {addToCart}= useContext(CartContext)
  const [purchase, setPurchase]= useState(false)

    const onAdd = (cantidad) => {
       addToCart(detalle, cantidad)
       setPurchase(true)
    }

  return (
    <div>
        <h2>Detalle de: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price}, 00</p>
        <p>Stock disponible: {detalle.stock} unidades</p>
        {/* OPCIONAL SEGUNDA PRE ENTREGA */}
       {purchase ? <Link to='/cart' className='btn btn-dark'>Ir al carrito</Link> :<ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail