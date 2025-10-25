//BORRA EL PRODUCTO QUE YA AGREGARON
//BORRAN LOS IDS
//EXPORTAREL ARRAY PARA USARLO

export const productos =[
     {
        name:'Random 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:15,
        price:35000,
        img:'../img/boba-fett.png',
        category:'ofertas'
    },
     {
        name:'Random 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:10,
        price:35000,
        img:'https://i.postimg.cc/KvXRQBn2/darth-vader.png',
        category:'ofertas'
    },
     {
        name:'Random 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:15,
        price:55000,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&s',
        category:'mas vendidos'
    },
]

let error = false
export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            let prod = productos.find((prod)=> prod.id === id)
            resolve(prod)
        },2000)
    })
}





