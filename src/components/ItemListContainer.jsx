import { useState, useEffect } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"
import LoaderComponent from "./LoaderComponent"


const ItemListContainer = ({mensaje})=>{
    const [data, setData] = useState([])
    const [loading, setLoading]= useState(false)
    const {type}=useParams()
    console.log('categoria: ', type)
    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> {
            if(type){
                //filtrar
                setData(res.filter((prod)=> prod.category === type))
            }else{
                //type es undefined y no filtro
                setData(res)
            }
        })
        .catch((error)=> console.error(error))
        .finally(()=> setLoading(false))
        //tiene que estar a la escucha del cambio de categoria
    },[type])

    // console.log(data)

    return(
        <>
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