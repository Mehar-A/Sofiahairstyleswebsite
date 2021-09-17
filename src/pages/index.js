import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import Services from '../components/Services'
import Deals from '../components/Deals'
import Contact from '../components/Contacts'


// <Services/>
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
    return (
        <>
          <Sidebar isOpen = {isOpen} toggle = {toggle}/>
          <Navbar toggle = {toggle}/>  
          <HeroSection/>
          <InfoSection {...homeObjOne}/>
          <Services/>
          <Products/>
          <Deals/>
          <Contact/>
        </>
    )
}

export default Home
