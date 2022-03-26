
import {AuthContext} from "../Contexts/Auth";
import {useContext} from "react";
import "./Navbar.css"
export const Status = () => {

    const {status,token} = useContext(AuthContext)

    return <div className="show">
        <h1> User is {status === "login" ? `loged-in` : "logout"}</h1>
        <h2>{status === "login" ? `Your token id :- ${token}` : ""}</h2>
    </div>
}