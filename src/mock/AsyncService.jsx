const productos =[
    {
        id:'01',
        name:'Random 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:25,
        price:25000,
        img:'https://picsum.photos/200',
        category:'nuevos'
    },
     {
        id:'02',
        name:'Random 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:15,
        price:35000,
        img:'../img/boba-fett.png',
        category:'ofertas'
    },
     {
        id:'03',
        name:'Random 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:10,
        price:35000,
        img:'https://i.postimg.cc/KvXRQBn2/darth-vader.png',
        category:'ofertas'
    },
     {
        id:'04',
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





