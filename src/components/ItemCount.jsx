import {useState} from 'react'

const ItemCount = ({stock, onAdd})=>{
    const[count, setCount]=useState(1)
    
    const sumar = ()=>{
        if(count < stock){
            setCount(count +1)
        }
    }
        const restar = ()=>{
            if(count > 0){
                setCount(count -1)
            }
        }
        const comprar = () => {
        onAdd(count)
        }
            


    
    return(
        <>
        {stock > 0 
        ? <div>
            <button className='btn btn-danger' onClick={restar}>-</button>
            <span className='btn'>{count}</span>
             <button className='btn btn-success' onClick={sumar}>+</button>
             <button className='btn btn-primary' onClick={comprar} disabled={stock===0 || count === 0}>Comprar</button>
        </div>
        : <p>Lo sentimos, por el momento no hay unidades disponibles.</p>
        
    }
        </>
    )
}

export default ItemCount