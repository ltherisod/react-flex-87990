import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, deleteItem, removeList, total}= useContext(CartContext)

    const preConfirm = () => {
        Swal.fire({
            icon:'question',
            title:'¿Estas seguro de borrar todo el carrito?',
            showDenyButton:true,
            denyButtonText:'No',
            confirmButtonText:'Si',
        }).then((result)=>{
            if(result.isConfirmed){
                removeList()
            }else if(result.isDenied){
                //pueden poner algo
            }
        })
    }
  return (
    <div>
        <h1>Tu carrito 🛒</h1>
        <div>
            {
                cart.map((compra)=>(
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                        <img src={compra.img} alt={compra.name} style={{width:'9rem'}}/>
                        <span>{compra.name}</span>
                        <span>${compra.price},00</span>
                        <span>cantidad: {compra.quantity}</span>
                        <span>precio final: ${compra.quantity * compra.price},00</span>
                        <button className='btn btn-danger' onClick={()=> deleteItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        {/* crear una fucnion en el contexto que calcule el total */}
        <span>Total a pagar: $ {total()}, 00</span>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={preConfirm}>Vaciar Carrito</button>
            {/* clase que viene */}
            <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
        </div>
    </div>
  )
}

export default CartView