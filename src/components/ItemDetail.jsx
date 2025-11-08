
import ItemCount from './ItemCount'
//importo el hook para usar el contexto
import { useContext, useState } from 'react'
//importo el contexto que quiero usar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({detalle}) => {
  const {addToCart, itemQuantity}= useContext(CartContext)
  const [purchase, setPurchase]= useState(false)

    const onAdd = (cantidad) => {
       addToCart(detalle, cantidad)
       setPurchase(true)
       Swal.fire({
        position:'top-end',
        icon:'success',
        title:`Agregaste ${detalle.name} al carrito`,
        showCancelButton:false,
        showConfirmButton:false,
        timer:2000
       })
    }
const stockActualizado = detalle.stock - itemQuantity(detalle.id)
  return (
    <div>
        <h2>Detalle de: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price}, 00</p>
        <p>Stock disponible: {stockActualizado} unidades</p>
        {/* OPCIONAL SEGUNDA PRE ENTREGA */}
       {purchase ? <Link to='/cart' className='btn btn-dark'>Ir al carrito</Link> :<ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail