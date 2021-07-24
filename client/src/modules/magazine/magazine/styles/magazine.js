import styled from 'styled-components'
import {Container, Grid} from '@material-ui/core'
//import { Container, Title, Description, FeatureList, Shelf } from './styles/magazine';

export const StyledContainer = styled(Container)`
  &&&{
    text-align: center;
  }
`

export const Title = styled.h1`
  margin-top: 15vh;
  text-align: center;
  font-size: 3em;
  color: #000b26;
`
export const Description = styled.p`
  text-align: center;
  color: #000E33;
  font-size: 1em;
  font-weight: 500;
  & b{
    color: #DB2A32;
  }
`
export const FeatureList = styled(Grid)`
  &&&{
    margin-top : 10vh;
  }
`
export const Feature = styled(Grid)`
  justify-content: center;
`
export const Shelf = styled(Grid)`
`
export const FeatureImage = styled.img`
  width: 100px;
  height: auto;
`
export const FeatureTitle = styled.h3`
  width : 100%;
  color: #000b26;
  text-align: center;
`
export const FeatureDescription = styled.p`
  text-align: center;
  color: #000b26;
`
