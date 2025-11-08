import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = ()=>{
     const {cart, cartQuantity}= useContext(CartContext)

    return(
        <>
            <BsCart4  fontSize={'1.5rem'}/>
            { cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </>
    )
}

export default CartWidgetIcons