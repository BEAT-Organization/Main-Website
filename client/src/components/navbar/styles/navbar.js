import styled from 'styled-components'
import {AppBar,Toolbar,Button} from '@material-ui/core'


//import {StyledAppBar, StyledToolBar, Logo, StyledLink} from './styles/navbar'
/*
    *
    import {AppBar,Toolbar,Button} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

import React from 'react'
import Navbar from '../components/navbar'

const useStyles = makeStyles(theme => ({


    * */

 
export const StyledAppBar = styled(AppBar)`
    &&&{
        background-color : #000B26;
        justify-content: flex-start;
        width: 100vw;
        position: fixed;
        top: 0px;
    }
`
export var StyledToolBar = styled(Toolbar)`
    &&&{
        background-color : #000B26;
        justify-content: space-between;
        width: 100vw;
        position: fixed;
        top: 0px;
    }
`
export var Logo = styled.img`
    height: 60px;
    margin-right : 10px;
`

export var StyledButton = styled(Button)`
    &&&{
        margin-right: 20px;
        width:100%;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        font-size : 1em;
        background-color : #000B26;
        text-transform: none;
        padding : 4px;
        font-weight : bolder;
        color : #DB2A32;
        Link.show{
            display:flex;
        }
        &:hover{
          color : #28ABE3;
        }
        @media screen and (max-width: 600px) {
            display: none; 
    }
    `
export const Styledbutton = styled(Button)`
    &&&{
        display:none;
        border : 0;
        font-size : 20px;
        background-color : transparent;
        padding : 4px;
        cursor : pointer;
        color : #DB2A32;
        @media screen and (max-width: 600px) {
            display: flex;
            margin-right:10px;
    }
    `

