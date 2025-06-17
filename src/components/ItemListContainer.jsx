import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    useEffect(()=>{
        getProducts()
        .then((respuesta)=> setData(respuesta))
        .catch((error)=> console.log(error))
    },[])

    console.log(data)
return(
    <div>
        <h1 className="text-secondary">{props.saludo}</h1>
        <ItemList data={data}/>
    </div>
)    
}

export default ItemListContainer


