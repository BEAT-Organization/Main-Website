import React, { useState } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {
    StyledAppBar,
    StyledToolBar,
    Logo,
    StyledButton,
    StyledLink,
    LinksContainer,
    StyledMenuIcon,
    MenuContainer,
    MenuButton,
    StyledListItemText,
    StyledImportContactsIcon,
    MenuList,
    StyledMenuItem,
    StyledHomeIcon

} from './styles'

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

Navbar.Links = function NavbarLinks({children, ...restProps}){
    return (
        <LinksContainer {...restProps}>{children}</LinksContainer>
    )
}


Navbar.Menu = function NavbarMenu({children, ...restProps}){
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MenuContainer {...restProps}>
            <NavMenuButton onClick={handleClick}/>
            <MenuList
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavMenuItem to='/' text="Home" icon={<StyledHomeIcon/>}/>
                <NavMenuItem to='/Magazine' text="Magazine" icon={<StyledImportContactsIcon/>}/>
            </MenuList>
        </MenuContainer>
    )
}

function NavMenuButton({children, ...restProps}){
    return (
        <MenuButton {...restProps}> <StyledMenuIcon /> </MenuButton>
    )
}

function NavMenuItem(props){
    const {to, icon, text} = props
    return (
        <StyledLink to={to}>
            <StyledMenuItem {...props}>
                <ListItemIcon> {icon} </ListItemIcon>
                <StyledListItemText >{text}</StyledListItemText>
            </StyledMenuItem>
        </StyledLink >
    )
}
