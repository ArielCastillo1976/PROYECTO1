export const productos=[
    
    {

        name:'Difusor Palo Santo',
        description:'madera sagrada para elevar la vibración y armonizar la energía',
        stock:30,
        price:3000,
        category:'ofertas',
        img:'https://picsum.photos/207'
    },
    {

        name:'Difusor Santal',
        description:'emite aroma cálido y amaderado que equilibra emociones',
        stock:10,
        price:1000,
        category:'mas vendidos',
        img:'https://picsum.photos/208'
    },
    {

        name:'Difusor Rocio Aurico',
        description:'limpia el aura, eleva la vibración y promueve el equilibrio emocional',
        stock:40,
        price:4000,
        category:'mas vendidos',
        img:'https://picsum.photos/209'
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