import {StyledAppBar, StyledToolBar, Logo, StyledButton, Styledbutton} from './styles/navbar'
import {Link} from 'react-router-dom'

export default function Navbar({children, ...restProps}){
    return <StyledAppBar {...restProps}> {children} </StyledAppBar>
}

Navbar.Toolbar = function NavbarToolbar({children, ...restProps}){
    return <StyledToolBar {...restProps}> {children} </StyledToolBar>
}

Navbar.Logo = function NavbarLogo({...restProps}){
    return <Logo {...restProps}/>
}

Navbar.Link = function NavbarLink({children, ...restProps}){
    return (
        <Link {...restProps}>
            <StyledButton> {children} </StyledButton>
        </Link>
    )
}
Navbar.Button = function Navbarbutton({children, ...restProps}){
    return <Styledbutton {...restProps}> {children} </Styledbutton>
}



