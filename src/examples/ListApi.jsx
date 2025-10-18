import React from 'react'
import ApiCard from './ApiCard'

const ListApi = ({data}) => {
    // console.log(props, 'props')
    // const {data}= props
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {data && data.map((personaje)=> <ApiCard key={personaje.id} personaje={personaje}/>)}
    </div>
  )
}

export default ListApi