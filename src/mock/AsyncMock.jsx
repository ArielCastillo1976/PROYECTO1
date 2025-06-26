const productos=[
    {
        id:'01',
        name:'Difusor Luz Aura',
        description:'lorem lorem lorem',
        stock:50,
        price:2000,
        category:'nuevos',
        img:'https://picsum.photos/200'
    },
    {
        id:'02',
        name:'Difusor Palo Santo',
        description:'lorem lorem lorem',
        stock:30,
        price:3000,
        category:'ofertas',
        img:'https://picsum.photos/200'
    },
    {
        id:'03',
        name:'Difusor Santal',
        description:'lorem lorem lorem',
        stock:10,
        price:1000,
        category:'mas vendidos',
        img:'https://picsum.photos/200'
    },
    {
        id:'04',
        name:'Difusor Rocio Aurico',
        description:'lorem lorem lorem',
        stock:40,
        price:4000,
        category:'mas vendidos',
        img:'https://picsum.photos/200'
    }
]

export const getProducts = () =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                resolve(productos)
            }
        },3000)
    })
}
export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let product= productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },3000)
    })
}