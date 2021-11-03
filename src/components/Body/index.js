import React from 'react'
import "./style.css"
import {NavLink} from "react-router-dom"
 const Body =()=> {
  return (

      <div className = "products">

        <NavLink  className="product" to = "/recommended">Recommended</NavLink>
        <NavLink   className="product" to = "/television"> Television</NavLink>
        <NavLink   className="product" to = "/mobile-phones"> Mobile Phones</NavLink>
        
      </div>

  )
}

export default Body
