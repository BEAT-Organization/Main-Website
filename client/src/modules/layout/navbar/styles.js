import styled from 'styled-components'
import {AppBar,Toolbar,Button, IconButton, Menu, MenuItem, ListItemText} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'

export const StyledAppBar = styled(AppBar)`
    &&&{
        background-color : #000B26;
        justify-content: flex-start;
        width: 100%;
        position: fixed;
        top: 0px;
    }
`

export const StyledToolBar = styled(Toolbar)`
    &&&{
        background-color : #000B26;
        justify-content: space-between;
        width: 100%;
        position: fixed;
        top: 0px;
        padding-left: 15px;
        padding-right: 15px;
    }
`

export const Logo = styled.img`
    height: 60px;
    margin-right : 10px;
`

export const StyledButton = styled(Button)`
    &&&{
        margin-right: 20px;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        font-size : 1em;
        background-color : #000B26;
        text-transform: none;
        padding : 4px;
        font-weight : bolder;
        color : #DB2A32;
        &:hover{
          color : #28ABE3;
        } 
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const LinksContainer = styled.div`
    @media (max-width: 650px) {
        && {
            display: none;
        }
    }
`

export const MenuButton = styled(IconButton)`
    &&{
       margin-right:20px;
    }
    @media (min-width: 650px) {
        && {
            display none;
        }
    }
`
export const StyledMenuIcon = styled(MenuIcon)`
    &&{
       font-size: 1.5em;
       color: #DB2A32;
    }
`

export const MenuContainer = styled.div``

export const MenuList = styled(Menu).attrs({
    getContentAnchorEl: null,
    anchorOrigin:{
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin:{
      vertical: 'top',
      horizontal: 'center',
    }
})`
    && .MuiPaper-root {
        background: #000B26;
        border-radius: 0px;
    }
`
export const StyledMenuItem = styled(MenuItem)`
    &&:focus {
      background-color: #DB2A32;
      && .MuiListItemIcon-root, & .MuiListItemText-primary {
        color: #fff;
      }
    }
`
export const StyledListItemText = styled(ListItemText)`
    &&{
        color: #fff;
    }
`
export const StyledHomeIcon = styled(HomeIcon).attrs({
    style: {
        color: '#fff'
    }
})``

export const StyledImportContactsIcon = styled(ImportContactsIcon).attrs({
    style: {
        color: '#fff'
    }
})``

