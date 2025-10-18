import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})

    //para traer un dato dinamico de la url uso USEPARAMS
    // const params = useParams()
    // console.log(params)
    const {id}= useParams()
    //tengo la funcion que devuelve 1 
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
    },[id])

    //si quiero reutilizar la funcion de ItemListContainer
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetalle(res.find((prod)=> prod.id === id)))
    //     .catch((error)=> console.log(error))
    // },[id])
  return (
    <div>
        <ItemDetail detalle={detalle}/>
    </div>
  )
}

export default ItemDetailContainer