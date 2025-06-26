import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detail, setDetail] =useState({})
    const {id} = useParams()
 
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
    },[])

  return (
    <>
    <ItemDetail detail={detail}/>
    </>
  )
}

export default ItemDetailContainer