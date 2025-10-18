//SUGAR SYNTAX


//DESTRUCTURING

//OBJS

const persona = {
    name:'Lala',
    mail:'lala@lala.com',
    dni:556565656,
    edad:25
}

const nombre = persona.name

const {name, mail, dni, edad}=persona

console.log(name)

//ARRAYS

const colores=['rojo', 'verde']

console.log(colores[0], colores[1])

const [primero, segundo]= colores


//Spread Operator 


const numeros =[1,2,3]
const numerosNuevos = numeros.concat([4,5,6])
const numeroSugar=[...numeros, 4,5,6,7,8,9]


//Operador Ternario

let mensaje;
if(edad>=18){
    mensaje='Podes viajar solo'
}else{
    mensaje='Necesitas permiso de tus padres para viajar'
}


const mensajeSuagar = edad >= 18 ? 'Podes viajar solo' :'Necesitas permiso de tus padres para viajar'


//Arrow Function

function sumar(a,b){
    return a+b
}

const sumarArrow = (a,b)=>{
    //codigo aca
    return a+b
}

const sumarSuperSugar = (a,b) => a+b