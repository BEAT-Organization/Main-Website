import styled from 'styled-components'

export const Container = styled.div`
    padding: 5vh 3vw;
    background: #fff;
`
export const Logo = styled.img`
height: 50px;
width:150px;
margin-right : 30px;
margin-left : 30px;
@media(max-width: 650px) {
    display:block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:20px;
    width: 50%;
}
`


export const Link = styled.a`
    margin-bottom: 20px;
    text-decoration: none;
    
`
export const Logo1 = styled.img`
    height: 50px;
    width:90px;
    margin-right : 30px;
    margin-left : 30px;
    @media(max-width: 650px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom:20px;
        height: 50px;
        width:90px;
        
    }

`

export const Title = styled.p`
   
   font-size: 30px;
    color: #000c26;
    margin-bottom: 40px;
    font-weight: bold;
    margin-top: 0;
    text-align: center;
`
