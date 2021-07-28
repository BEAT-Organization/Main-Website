import styled from 'styled-components'
import {containerItemGrid, containerGrid} from 'shared'

export const Container = styled(containerGrid)``
export const TitleContainer = styled(containerItemGrid).attrs({md:12, xs:12})`
   text-align: center;
   align-content: center;
   justify-content: center;
`
export const Title = styled.h1`
   font-size: 3em;
   color: #000b26;
`
