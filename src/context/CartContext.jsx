import { createContext, useState } from "react";


//Crear el contexto

export const CartContext = createContext()

//Crear el proveedor 

export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([])

    //todas las funciones que manejen carrito
    const addToCart = (item, qty) => {  //implementa la funcionalidad para agregar un producto al carrito
        // console.log({...item, quantity:qty})
        if(isInCart(item.id)){
            //esta en el carrito
            //sumar cantidades
            // console.log('ya esta en el carrito')
            //forma larga
            // const carritoActualizado = cart.map((prod)=>{
            //     if(prod.id === item.id){
            //         //sumar cantidades
            //         return {...prod, quantity: prod.quantity + qty}
            //     }else{
            //         //todos los que restan, sin modificar
            //         return prod
            //     }
            // })

            // //actualizar el estado con el nuevo array
            // setCart(carritoActualizado)
            //forma corta
            setCart(
                cart.map((prod)=>{
                if(prod.id === item.id){
                    //sumar cantidades
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    //todos los que restan, sin modificar
                    return prod
                }
            })
            )
        }else{

            setCart([...cart, {...item, quantity:qty}])
        }
    }


    const removeList = () => {	//implementa la funcionalidad para dejar el carrito vacío
        setCart([])
    }

    const deleteItem = (id) => {	//implementa la funcionalidad para borrar un producto del carrito
        setCart(cart.filter((prod)=> prod.id !== id))
    }

        const isInCart = (id) => {	//devolver true o false
            return cart.some((prod)=> prod.id === id)
    }

    //total a pagar

    const total = ()=> {
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
    }

    const cartQuantity = ()=>{
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }


    const itemQuantity = (id)=>{
        const itemCart = cart.find((prod)=> prod.id === id)

    if(itemCart){
        return itemCart.quantity
    }else{
        //no existe
        return 0
    }
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeList, deleteItem, total, cartQuantity, itemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}