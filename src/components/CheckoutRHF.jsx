import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'

const CheckoutRHF = () => {
  const [loading, setLoading]= useState(false)
  const [orderId, setOrderId]= useState(null)
  const {register, handleSubmit, formState:{errors}, getValues}= useForm()
 
  const {cart, total, removeList}= useContext(CartContext)
 console.log(errors)

          const finalizarCompra = (dataForm)=> {
            setLoading(true)
          let order = {
            comprador: {
              name:dataForm.name,
              lastname:dataForm.lastname,
              email: dataForm.email,
              address:dataForm.address
            },
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
          .finally(()=> setLoading(false))
        
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
        
        <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit(finalizarCompra)}>
          <input name='name' className="form-control" type="text"placeholder="Ingrese su nombre" {...register("name", {required:true, minLength:3})} />
          {errors?.name?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
           {errors?.name?.type === 'minLength' && <span style={{color:'red'}}>El nombre debe contener minimo 3 caracteres</span>}
          <input name='lastname' className="form-control" type="text"placeholder="Ingrese su apellido" {...register("lastname", {required:true, minLength:2})}/>
          {errors?.lastname?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
           {errors?.lastname?.type === 'minLength' && <span style={{color:'red'}}>El apellido debe contener minimo 2 caracteres</span>}
          <input name='address' className="form-control" type="text"placeholder="Ingrese su dirección" {...register("address", {required:true, minLength:10, maxLength:35})}/>
           {errors?.address?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
           {errors?.address?.type === 'minLength' && <span style={{color:'red'}}>La direccion debe contener minimo 10 caracteres</span>}
           {errors?.address?.type === 'maxLength' && <span style={{color:'red'}}>La direccion es demasiado larga</span>}
          <input name='email' className="form-control" type="email"placeholder="Ingrese su correo" {...register("email", {required:true})} />
          {errors?.email?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
          <input name='secondmail' className="form-control" type="email"placeholder="Repita su correo" {...register("secondmail", {required:true, validate: {equalsMails: mail2 => mail2 === getValues().email}})}/>
           {errors?.secondmail?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
             {errors?.secondmail?.type === 'equalsMails' && <span style={{color:'red'}}>Los mails deben ser iguales</span>}
          <button type="submit" className="btn btn-success" disabled={loading}>{loading ? 'Cargando Compra' :'Completar Compra'}</button>
        </form>
    </div>
    }
    </>
  )
}

export default CheckoutRHF