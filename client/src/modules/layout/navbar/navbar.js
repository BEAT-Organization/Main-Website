import {StyledAppBar, StyledToolBar, Logo, StyledButton, StyledLink} from './styles'

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
        <StyledLink {...restProps}>
            <StyledButton> {children} </StyledButton>
        </StyledLink>
    )
}

