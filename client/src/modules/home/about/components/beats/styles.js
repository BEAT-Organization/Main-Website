import styled from 'styled-components'
import {containerItemGrid, ItemGrid} from 'shared'

export const BeatsContainerGrid = styled(containerItemGrid).attrs({ md: 6, xs: 12 })`
    && {
        flex-direction: row;
        padding: 15px;
    }
`
export const BeatsContainer = styled(containerItemGrid).attrs({ md: 12, xs: 12 })`
    && {
        flex-direction: column;
    }
`
export const Title = styled.h1`
    margin-top: 0px;
    color: #2276e7;
    text-align: center;
    font-size: 1.8em;
    margin-bottom: 7vh;
`
export const TitleContainer = styled(ItemGrid).attrs({md:12, sm:12, xs:12})` `

