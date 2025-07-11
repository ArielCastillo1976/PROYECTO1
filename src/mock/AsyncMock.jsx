const productos=[
    {
        id:'01',
        name:'Difusor Luz Aura',
        description:'armoniza el ambiente elevando la energía y el bienestar',
        stock:50,
        price:2000,
        category:'nuevos',
        img:'/image/difusorluzaura.jpg'
    },
    {
        id:'02',
        name:'Difusor Palo Santo',
        description:'madera sagrada para elevar la vibración y armonizar la energía',
        stock:30,
        price:3000,
        category:'ofertas',
        img:'/image/difusorpalosanto.jpg'
    },
    {
        id:'03',
        name:'Difusor Santal',
        description:'emite aroma cálido y amaderado que equilibra emociones',
        stock:10,
        price:1000,
        category:'mas vendidos',
        img:'/image/difusorsantal.jpg'
    },
    {
        id:'04',
        name:'Difusor Rocio Aurico',
        description:'limpia el aura, eleva la vibración y promueve el equilibrio emocional',
        stock:40,
        price:4000,
        category:'mas vendidos',
        img:'/image/difusorrocioaurico.jpg'
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