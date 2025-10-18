import "./Button.css"
const Button = (props)=>{
    const {text}= props
   const styleObj ={
    backgroundColor : props.color,
    // padding: "10px 20px",
    // border:"none",
    // color:'black',
    // cursor:'pointer'
   }
    return(
        <button className='mi-boton' style={styleObj} onClick={props.clickHandler}>
             {text}
        </button>
        //   <button style={styleObj} onClick={props.clickHandler}>
        //      {props.children}
        // </button>
    )
}

export default Button