import React from 'react'
import Navbar from '../components/navbar'
import logo from '../images/logo.png'

export function NavBarContainer(){
    return (
        <Navbar>
            <Navbar.Toolbar>
                <Navbar.Logo src={logo} alt="logo"/>
                <Navbar.Link to='/'>Home</Navbar.Link>
                <Navbar.Link to='/ContactUs'>ContactUs</Navbar.Link>
                <Navbar.Link to='/Articles'>Articles</Navbar.Link>
                <Navbar.Link to='/Magazine'>Magazine</Navbar.Link>
            </Navbar.Toolbar>
        </Navbar>
    )
}

export default Navbar
