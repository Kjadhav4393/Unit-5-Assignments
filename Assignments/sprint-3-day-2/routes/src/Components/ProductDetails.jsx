import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export const ProductDetails=()=>{
    const [item,setitem]=useState({})
    const {id}=useParams();

    useEffect(()=>{
  axios.get(`http://localhost:3001/products/${id}`).then(({data})=>{
         setitem(data);
  })
    },[])
    
    return (
        <div>
            <img src={item.img} alt="" />
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
        </div>
    )
}