import { Link } from "react-router-dom"

export const Home=()=>{
    return(
        <div>
            <h1>Product list Page</h1>
            <Link to={"/Product"}>Product page</Link>
        </div>
    )
}