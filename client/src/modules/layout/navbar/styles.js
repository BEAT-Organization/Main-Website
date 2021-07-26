import styled from 'styled-components'
import {AppBar,Toolbar,Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

export const StyledAppBar = styled(AppBar)`
    &&&{
        background-color : #000B26;
        justify-content: flex-start;
        width: 100vw;
        position: fixed;
        top: 0px;
    }
`

export const StyledToolBar = styled(Toolbar)`
    &&&{
        background-color : #000B26;
        justify-content: flex-start;
        width: 100vw;
        position: fixed;
        top: 0px;
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
