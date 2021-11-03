import React from 'react'
import "./style.css"
const Footer = () => {
  return (
                <div className = "footer">
                  <div className = "footercontent">
                     <a href = "http://www.google.com"><h3>help center</h3></a>
                        <a href = "about-us"><h3>contact Us</h3></a>
                          <a href = ""><h3>shipping & deliverly</h3></a>
                            <a href = ""><h3>return policy</h3></a>
                             <a href = ""><h3>corparate & bulk purchases</h3></a>
                      <a href = ""><h3>become a samuomart vender</h3></a>
                    <a href = ""><h3>black friday</h3></a>
                  <a href = ""><h3>report a product</h3></a>
                  </div>
                     
                  <div className="socialmedia">
                  <label>
                    < a href = "https://twitter.com/samuokimkenya">
                     <i class="fab fa-twitter" style = {{  fontSize:"30px"}}></i>
                       </a>
                          </label>
                             <label>
                                  < a href = "https://instagram.com/samuo_kim"> 
                                     <i class="fab fa-instagram" style = {{  fontSize:"30px"}}></i></a>
                                 </label>
                         <label>
                    < a href = "https://Facebook.com/sammy.samuokim"> 
             <i class="fab fa-facebook-f" style = {{  fontSize:"30px"}} ></i></a>
         </label>
         </div>
              <div className="endfooter">
                      <i class=" fas fa-copyright">Sammy Kariuki </i>
                      <p> All right Reserved. </p>
                </div>
               
           </div>

     
    
  )
}

export default Footer
