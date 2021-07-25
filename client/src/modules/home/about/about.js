import React from 'react'
import {Container, TitleContainer, Title} from './styles'
import {Beats, Targets, Vision, Mission} from './components'

export {Vision,Mission,Beats} from './components'

export default function About({children, ...restProps}){
   return(
     <Container {...restProps} >{children}</Container>
   )
}

About.Title = function AboutTitle({...restProps}){
   return(
      <TitleContainer {...restProps}>
         <Title> About US &nbsp;
            <i className="fas fa-info-circle" aria-hidden="true" ></i>
         </Title>
      </TitleContainer>
   )
}

About.Targets = function AboutTargets({children, ...restProps}){
   return(
      <Targets {...restProps}>{children}</Targets>
   )
}

About.Beats = function AboutBeats({children, ...restProps}){
   return(
      <Beats {...restProps}>
         {children}
      </Beats>
   )
}

About.Vision = function AboutVision({children, ...restProps}){
   return(
      <Vision {...restProps}>
         {children}
      </Vision>
   )
}

About.Mission = function AboutMission({children, ...restProps}){
   return(
      <Mission {...restProps}>
         {children}
      </Mission>
   )
}


