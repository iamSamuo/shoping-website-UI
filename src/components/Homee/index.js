import React from 'react'
import SubHeader from '../MainHeader/SubHeader'
import Body from '../Body'
import HeaderMenu from '../headermenu'
import LoginForm from '../../conta/headermenuconatiner/login'
import MainHeader from '../MainHeader'
import Footer from '../Footer'
import Displays from '../Display'

const  Home = () => {
  return (
      <div>
           <SubHeader/>
           <Body/>
           <Displays/>
      </div>
    
  )
}

export default Home
