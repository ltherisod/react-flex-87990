import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
//se importa el hook de usar contexto
import { useContext } from "react";
//importar el contexto que quiero usar
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = ()=>{
    // const contexto = useContext(CartContext)
    // console.log('CartWidget', contexto.cart)
     const {cart, cartQuantity}= useContext(CartContext)
    console.log('CartWidget', cart)
    return(
        <>
        {/* {cart.length ?<div>
            <BsCart4  fontSize={'1.5rem'}/>
             <Badge bg="danger">{cartQuantity()}</Badge>
        </div>: <></>} */}
       
            <BsCart4  fontSize={'1.5rem'}/>
            { cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        
        </>
    )
}

export default CartWidgetIcons