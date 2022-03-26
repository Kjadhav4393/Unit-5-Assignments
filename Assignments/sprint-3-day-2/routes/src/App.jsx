// import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import{Routes,Route} from "react-router-dom"
import { Home } from './Components/Home'
import { Product } from './Components/Product'
import { ProductDetails } from './Components/ProductDetails'

function App() {
  

  return (
    <div className="App">
      
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Product' element={<Product/>}/>
       <Route path='/Product/:id' element={<ProductDetails/>}/>
       <Route path='*' element={"404 Page not found"}/>
     </Routes>
    </div>
  )
}

export default App
