import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'


const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]= useState(false)
    const [invalid, setInvalid]= useState(null)
    const {id}= useParams()




    //FIREBASE
    useEffect(()=>{
       setCargando(true)
       //creamos la referencia
      const docRef= doc(db, "products", id)
      //traer ese doc
      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setDetalle({ id: res.id, ...res.data()})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))
    },[id])
    
    if(invalid){
      return (
        <div>
          <h1>El producto no existe! 😱</h1>
          <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
      )
    }
  return (
    <div>
        {cargando ? <LoaderComponent/> :<ItemDetail detalle={detalle}/>}
    </div>
  )
}

export default ItemDetailContainer