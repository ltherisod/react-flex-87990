import React, { useEffect, useState } from 'react'
import ListApi from './ListApi'
import { useFetch } from '../hooks/useFetch'

const FetchApi = () => {
    const [data, setData] = useState([])
    const {data:personajes, loading, error} = useFetch('https://dragonball-api.com/api/characters')

    // useEffect(()=>{
    //     //pido datos
    //     fetch('https://dragonball-api.com/api/characters')
    //     //lo traduzco
    //     .then((response)=> response.json())
    //     //guardo la respuesta para poder utilizarla
    //     .then((res)=> {
    //         // console.log(res.items, 'res')
    //         setData(res.items)
    //     })
    //     .catch((error)=> console.log(error))
    // },[])


    // console.log('data', data)
console.log(personajes, loading, error)
  return (
    <div>
        {loading ? <p>Cargando personajes...</p> : <ListApi data={personajes?.items}/>}
        {/* {data.map((personaje)=> <p key={personaje.id}>{personaje.name}</p>)} */}
    </div>
  )
}

export default FetchApi