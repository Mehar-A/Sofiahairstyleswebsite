import React , {useState}from 'react';
import {BtnWrap} from './DashboardElemetns';
import { Button2 } from '../ButtomElements';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Deals from './Pages/Deals'
import Contact from './Pages/Contact'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Dashboard = ({Logout}) => {
    const [details] = useState ({username:"", password:""});

    const submitHandler = e =>{
        e.preventDefault(); // doesnt load itself
        Logout(details);
    }

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (

        <>
        <Router>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <BtnWrap>
                            <Button2 onClick={submitHandler} smooth={true} duration={500} spy={true} exact="true" offset={0}>Logout</Button2>
                    </BtnWrap>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        );
                        })}
                    </ul>
                </nav>                
            </IconContext.Provider>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/deals' component={Deals} />
            <Route path='/contact' component={Contact} />
            </Switch>
        </Router>
     
    </>
        
    )
}

export default Dashboard
