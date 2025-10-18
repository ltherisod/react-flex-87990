import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]= useState(false)
    //para traer un dato dinamico de la url uso USEPARAMS
    // const params = useParams()
    // console.log(params)
    const {id}= useParams()
    //tengo la funcion que devuelve 1 
    useEffect(()=>{
      setCargando(true)
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[id])

    //si quiero reutilizar la funcion de ItemListContainer
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetalle(res.find((prod)=> prod.id === id)))
    //     .catch((error)=> console.log(error))
    // },[id])
  return (
    <div>
        {cargando ? <LoaderComponent/> :<ItemDetail detalle={detalle}/>}
    </div>
  )
}

export default ItemDetailContainer