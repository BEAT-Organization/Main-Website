import {containerGrid, containerItemGrid} from 'shared'
import styled from "styled-components";

export const Container = styled(containerGrid).attrs({container: false, item: true})`
   && {
      text-align: center;
      align-items: center;
      align-content: center;
      justify-content: center;
      flex-direction: column;
   }
`
export const Title = styled.h1`
   color: #d1242a;
   margin-top: 0px;
   font-size: 1.8em;
   margin-bottom: ${(props) => (props.vision ? '7vh' : '11vh')};
`
export const Description = styled.p`
   font-size: 1.25em;
   margin-top: ${(props) => (props.vision ? '4vh' : '11vh')};
   color: #000b26;
   margin-bottom: 10vh;
`
export const TargetsContainer = styled(containerItemGrid).attrs({md:6, xs:12})`
   && {
      padding: 15px;
      justify-content: center;
   }
`
