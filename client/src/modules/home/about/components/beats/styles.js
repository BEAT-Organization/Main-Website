import styled from 'styled-components'
import {ContainerGrid, BeatsContainer} from './styles';

const containerItemGrid = styled(Grid).attrs({
    container: true,
    item: true,
})``


export const ContainerGrid = styled(containerItemGrid).attrs({ md: 6, xs: 12 })`
    && {
        flex-direction: column;
        padding: 15px;
    }
`
export const BeatsContainer = styled(containerItemGrid).attrs({ md: 12, xs: 12 })`
    && {
        flex-direction: column;
    }
`
export const Title = styled.h1`
    color: #fc414a;
    margin-top: 0px;
    color: #2276e7;
    text-align: center;
    font-size: 1.8em;
`

