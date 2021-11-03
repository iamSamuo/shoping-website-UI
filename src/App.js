import React from 'react'
import "./App.css"
import { BrowserRouter as Router , Switch,Route } from "react-router-dom"
import Recommended from "./conta/Collection/Recommeded"
import Television from "./conta/Collection/Television"
import Home from './components/Homee'
import LoginForm from './conta/headermenuconatiner/login'
import MainHeader from './components/MainHeader'
import Contactus from './conta/headermenuconatiner/contact-us'
import HomeAudioSystems from './conta/Collection/Home audio systems'
import CreateAccount from './conta/headermenuconatiner/create-account'
import AboutUs from './conta/headermenuconatiner/about-us'
import Footer from './components/Footer'

function App() {
  return (

     <div className = "App">

           <Router>

                      <MainHeader/>
                      <Switch>
                       <Route path = "/"exact component ={Home}/>
                       <Route path = "/login"  component ={LoginForm}/>
                       <Route path = "/create-account"  component ={CreateAccount}/>
                       <Route path = "/contact-us" component ={Contactus}/>
                       <Route path = "/about-us" component ={AboutUs}/>
                       <Route path = "/television"  component = {Television}/>
                       <Route path = "/recommended"  component = {Recommended}/>
                       <Route path = "/mobile-phones"  component = {HomeAudioSystems}/>
                       </Switch>
                       <Footer/>
                

            </Router>

     </div>
  

  )
}

export default App

  

      

