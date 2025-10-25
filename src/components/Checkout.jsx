import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
  const [buyer, setBuyer]=useState({})
  const [checkMail, setCheckMail]= useState('')
  const [orderId, setOrderId]= useState(null)
  const [error, setError]= useState(null)
  const {cart, total, removeList}= useContext(CartContext)
  const buyerData =(e)=>{
    setBuyer(
      {
        ...buyer,
        [e.target.name]: e.target.value
      }
    )
  }
console.log(buyer, 'comprador', checkMail)
          const finalizarCompra = (e)=> {
            e.preventDefault()
            if(!buyer.name || !buyer.lastname || !buyer.mail || !buyer.address){
              setError('Complete los campos')
            }else if(buyer.mail !== checkMail){
            
              setError('Los correos no coinciden')
            }else{
              setError(null)
                // console.log(e)
          let order = {
            comprador: buyer,
            compras:cart,
            total:total(),
            fecha: serverTimestamp()
          }
          const ventas = collection(db, "orders")
          //AGREGO el doc
          addDoc(ventas, order)
          .then((res)=>{
          setOrderId(res.id)
          removeList()
          })
          .catch((error)=> console.log(error))
            }
        
          }

          if(!cart.length && !orderId){
            return <EmptyCart/>
          }
  return (
    <>
    {
      orderId 
      ? <div>
        <h2> Realizaste correctamente tu compra! 🛒</h2>
        <h4>El codigo de seguimiento es: {orderId}</h4>
        <Link to='/' className='btn btn-dark'>Volver a home</Link>
      </div>
      : <div>
        <h1>Complete el formulario con sus datos</h1>
        {error && <span style={{color:'red', fontWeight:'bold'}}>{error}</span>}
        <form className="p-4 border rounded shadow-sm bg-light" onSubmit={finalizarCompra}>
          <input name='name' className="form-control" type="text"placeholder="Ingrese su nombre" onChange={buyerData}/>
          <input name='lastname' className="form-control" type="text"placeholder="Ingrese su apellido" onChange={buyerData}/>
          <input name='address' className="form-control" type="text"placeholder="Ingrese su dirección" onChange={buyerData}/>
          <input name='mail' className="form-control" type="email"placeholder="Ingrese su correo" onChange={buyerData}/>
          <input name='secondmail' className="form-control" type="email"placeholder="Repita su correo" onChange={(e)=> setCheckMail(e.target.value)}/>
          <button type="submit" className="btn btn-success">Completar Compra</button>
        </form>
    </div>
    }
    </>
  )
}

export default Checkout