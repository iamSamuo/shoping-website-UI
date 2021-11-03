import React from "react"
import "./style.css"


const Displays = ( ) => {
  return(
              <div className="display-item">

                      <div className = "topselling">
                          <h3> Top Sale</h3>
                           <div className = "topselling-item">
                              <img src ={ require ("../../assets/body images/1.jpg" )} style = { {Width:"6em "}}></img>
                              <p>Smart Watch </p>
                              <h3> Ksh 1999 </h3>
                           </div>

                           <div  className = "topselling-item">
                              <img  src ={ require ("../../assets/body images/2.jpg" )}></img>
                              <p>Smart Watch</p>
                              <h3>Ksh 999</h3>
                           </div>

                           <div  className = "topselling-item">
                              <img  src ={ require ("../../assets/body images/3.jpg" )}></img>
                              <p>PS4 </p>
                              <h3> Ksh 18900 </h3>
                           </div>

                           <div  className = "topselling-item">
                              <img  src ={ require ("../../assets/body images/8.jpg" )}></img>
                              <p>Ruhr Gold Beer </p>
                              <h3> Ksh 200 </h3>
                           </div>
                      </div>
                         
                      <div className = "deals">
                          <h3> Electronics </h3>
                           <div className = "deals-item">
                              <img  src ={ require ("../../assets/body images/4.jpg" )}></img>
                              <p> Hair Clippers </p>
                              <h3>Ksh 300  </h3>
                           </div>

                           <div  className = "deals-item">
                              <img src ={ require ("../../assets/body images/5.jpg" )}></img>
                              <p>Dress  </p>
                              <h3> Ksh  1600 </h3>
                           </div>

                           <div  className = "deals-item">
                              <img src ={ require ("../../assets/body images/6.jpg" )}></img>
                              <p>Desiner T-shirts </p>
                              <h3> Ksh 600 </h3>
                           </div>

                           <div  className = "deals-item">
                              <img src ={ require ("../../assets/body images/7.jpg" )}></img>
                              <p>Fresh Milk </p>
                              <h3> Ksh 45 </h3>
                           </div>
                      </div>
               </div>
  )
}
 export default Displays