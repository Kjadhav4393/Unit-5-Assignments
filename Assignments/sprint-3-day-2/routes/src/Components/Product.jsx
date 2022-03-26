import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export const Product=()=>{
 const[details,setDetails]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/products").then(({data})=>{
            setDetails(data);
        })
        
    },[])

    return(
        <div>
             <table className="table" border="1">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Price</th>
          
          </tr>
        </thead>
        <tbody>
          {details.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td>{house.id}</td>
                <td >{house.name} </td>
                <td >{house.price}</td>
                <td><Link to={`/Product/${house.id}`}>More</Link></td>
          </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    )
}