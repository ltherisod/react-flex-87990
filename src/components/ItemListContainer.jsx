import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"


const ItemListContainer = ({mensaje})=>{
    const [data, setData] = useState([])
    const [loading, setLoading]= useState(false)
    const {type}=useParams()

  


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
          
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
           
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[type])



    
    return(
        <>
            {
                loading 
                ? <LoaderComponent/> 
                : <div>
            <h1>{mensaje} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data} />
        </div>
            }
        </>
        
    )
}
export default ItemListContainer