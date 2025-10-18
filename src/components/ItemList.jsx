import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
    // console.log(props)
    // const {data}= props
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {/* {data.map((prod)=> {
           return <Item key={prod.id} prod={prod}/>
        })} */}
        {/* {data.map((prod)=> (
            <Item key={prod.id} prod={prod}/>
        ))} */}
           {data.map((prod)=>  <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList