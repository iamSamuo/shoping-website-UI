
 import React ,{ useState } from 'react'
 import { NavLink} from "react-router-dom"
 import "./style.css"
const  HeaderMenu = ()  =>{
  const [click, setclick] =useState( false );
  const handleClick = ( ) =>{ 
    setclick( ! click);
  }
  const closeMobileMenu = ( ) =>{
    setclick( false);
  }
  return (
     <div className = "menu">

                        <div className="menu-icon " onClick = { handleClick } >
                          <i className= { click ? "fas fa-times " : "fas fa-bars"  } />
                        </div>
                        <ul className = { click ? "nav-menu active" : "nav-menu" } >
                          <li className = "nav-item" onClick = { closeMobileMenu}> 
                             <NavLink className= "nav-link" to = "/">
                             <i class="fas fa-home"></i>
                               Home
                               </NavLink>
                          </li>

                          <li className = "nav-item " onClick = { closeMobileMenu}> 
                            <NavLink className = "nav-link " to = "/create-account">
                               Create Account 
                               </NavLink>
                            </li>
                          <li  className = "nav-item " onClick = { closeMobileMenu}> 
                             <NavLink className = "nav-link " to = "/login">
                             <i class="fas fa-sign-in-alt" style={{ fontSize:"13px", padding:"0 10px"}}></i>
                                 Login 
                                  </NavLink>
                              </li>
                          <li  className = "nav-item " onClick = { closeMobileMenu}> 
                             <NavLink className = "nav-link" to = "contact-us"> 
                              Contact Us 
                               </NavLink>
                                </li>
                          <li  className = "nav-item " onClick = { closeMobileMenu}>  
                            <NavLink className = "nav-link-mobile" to = "about-us"> 
                            <i class="fas fa-address-card"style={{ fontSize:"13px", padding:"0 10px"}}></i>
                            About Us
                             </NavLink>
                        </li>
                        </ul>
                         
        
     </div>
    
  )
}

export default HeaderMenu
