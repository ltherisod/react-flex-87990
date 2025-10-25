import { useState, useEffect } from "react"
import { getProducts, productos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"
import LoaderComponent from "./LoaderComponent"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"


const ItemListContainer = ({mensaje})=>{
    const [data, setData] = useState([])
    const [loading, setLoading]= useState(false)
    const {type}=useParams()

    console.log('categoria: ', type)


    //firebase
    useEffect(()=>{
        setLoading(true)
        //conectarnos a nuestra collection
        const prodCollection = type 
        ? query(collection(db, "products"), where("category", "==", type ))
        : collection(db, "products")
        //pedir documentos
        getDocs(prodCollection)
        .then((res)=>{
            // console.log(res.docs)

            //limpiar y obtener los datos
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            // console.log(list)
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[type])



    //promise
    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=> {
    //         if(type){
    //             //filtrar
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             //type es undefined y no filtro
    //             setData(res)
    //         }
    //     })
    //     .catch((error)=> console.error(error))
    //     .finally(()=> setLoading(false))
    //     //tiene que estar a la escucha del cambio de categoria
    // },[type])

    // console.log(data)

    //SE HACE UA SOLA VEZ Y DESPUES SE BORRA
    // const subirData = ()=>{
    //     console.log('Subiendo Data...')
    //     const coleccionASubir = collection(db, 'products')
    //     productos.map((prod)=> addDoc(coleccionASubir, prod))
    // }

    return(
        <>
        {/* despues se borra */}
        {/* <button onClick={subirData}>SUBIR DATA A FIREBASE</button> */}
            {
                loading 
                ? <LoaderComponent/> 
                : <div>
            {/* <Input/> */}
            <h1>{mensaje} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data} />
        </div>
            }
        </>
        
    )
}
export default ItemListContainer