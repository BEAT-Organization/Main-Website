import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'

const containerItemGrid = styled(Grid).attrs({
    container: true,
    item: true,
})``

export const ContainerGrid = styled(containerItemGrid)`
    && {
        justify-content: space-between;
        align-content: center;
        margin-bottom: 20px;
    }
`

export const IconContainer = styled(containerItemGrid).attrs({ md: 1, sm: 2, xs: 3 })`
    && {
        justify-content: center;
        align-content: center;
    }
`

export const IconButton = styled(Button)`
    && {
       max-width: 60px;
       min-width: 60px;
       max-height: 60px;
       min-height: 60px;
       background: #000c26;
    }
`

export const InfoContainer = styled(containerItemGrid).attrs({ md: 10, sm: 10, xs: 9})`
    && {
        justify-content: space-around;
        flex-direction: column;
    }
`

export const TitleContainer = styled(Grid).attrs({ item: true })``

export const BeatTitle = styled.h6`
    && {
        font-size: 1.5em;
        font-family: 'Inter', sans-serif;
        color: #2276e7;
        margin: 0px;
        font-weight: 450;
    }
`

export const DescContainer = styled(Grid).attrs({ item: true })``

export const BeatDescription = styled.p`
    && {
        font-size: 1.25em;
        font-family: 'Inter', sans-serif;
        color: #000c26;
    }
`
