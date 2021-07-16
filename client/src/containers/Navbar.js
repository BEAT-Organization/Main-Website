import React from 'react'
import Navbar from '../components/navbar'
import logo from '../images/logo.png'



export function NavBarContainer(){
    return (
        
        <Navbar>
           
            <Navbar.Toolbar>
                <Navbar.Logo src={logo} alt="logo"/>
                <Navbar.Link class="menu" id="menu">
                
                <Navbar.Link to='/' class="menuLink">Home</Navbar.Link>
                <Navbar.Link to='/ContactUs' class="menuLink">ContactUs</Navbar.Link>
                <Navbar.Link to='/Articles' class="menuLink">Articles</Navbar.Link>
                <Navbar.Link to='/Magazine' class="menuLink">Magazine</Navbar.Link>
                </Navbar.Link>
                
                <Navbar.Button class="hamburger" id="hamburger"><i class="fas fa-bars"></i>
                </Navbar.Button>
            </Navbar.Toolbar>
            
        </Navbar>
    )
    
}


export default Navbar




 
    