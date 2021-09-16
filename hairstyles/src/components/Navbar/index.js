import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo,MoblieIcon,NavMenu,NavItem,NavLinks, NavBtnLink, NavBtn} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

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

    /*
    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll',changeNav);
    },[])

*/

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
        <Nav >
            <NavbarContainer>
                <NavLogo to='/' onClick = {toggleHome} >Sofia Jure</NavLogo>

                <MoblieIcon onClick= {toggle}>
                    <FaBars/>
                </MoblieIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to = "about" smooth = "true" duration = {500} spy = {true} exact = 'true' offest={80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "services" smooth = "true" duration = {500} spy = {true} exact = 'true' offest={80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "products" smooth = "true" duration = {500} spy = {true} exact = 'true' offest={80}>Products</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "deals" smooth = "true" duration = {500} spy = {true} exact = 'true' offest={80}>Deals</NavLinks>
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
