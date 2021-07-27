import React from 'react'
import { Container, Title, Description} from './styles'
import { ReactComponent as Img } from '../../../images/vision.svg';

export default function Vision({children, ...restProps}){
   return(
     <Container {...restProps} >{children}</Container>
   )
}

Vision.Title = function VisionTitle({...restProps}){
   return(
      <Title vision {...restProps}>VISION</Title>
   )
}

Vision.Img = function VisionImg({children, ...restProps}){
   return(
      <Img {...restProps}/>
   )
}

Vision.Description = function VisionDescription({children, ...restProps}){
   return(
      <Description vision {...restProps}>Our vision is to develop the stakeholders of entire healthcare system.</Description>
   )
}


