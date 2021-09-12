import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo,MoblieIcon,NavMenu,NavItem,NavLinks, NavBtnLink, NavBtn} from './NavbarElements'

//  working with navbar here

// adminlogo is the title for this website

// make sure to take out sign in and signup buttons

/*
We will fix it later 

<NavBtn>
                    <NavBtnLink to = "/signup">Sign up</NavBtnLink>
                </NavBtn>


*/
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' smooth={true} duration={500} spy={true} exact="true" offset={-80} >Sofia Jure</NavLogo>

                <MoblieIcon onClick= {toggle}>
                    <FaBars/>
                </MoblieIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to = "about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "products">Products</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "deals">Deals</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to = "contact">Contact Us</NavBtnLink>
                </NavBtn>

                </NavbarContainer>
        
            
        </Nav>


        </>
    )
}

export default Navbar
