import { useEffect } from "react"


//funcion HOC
const withLogging = (WrappedComponent) => {

    //Este es el nuevo componente que se crea con el HOC
    const ComponentWithLogging = (props) => {
        //Este efecto se ejecuta cuando el componente aparece en pantalla
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se muestra en pantalla 🥳`)
        },[])

        //Mostrando el componente original con todas sus props
        return <WrappedComponent {...props}/>
    }

    //Devolvemos el nuevo componente

    return ComponentWithLogging

}

export default withLogging