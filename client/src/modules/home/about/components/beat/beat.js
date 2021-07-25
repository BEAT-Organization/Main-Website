import React from 'react' ;
import {
    ContainerGrid,
    IconContainer,
    IconButton,
    InfoContainer,
    TitleContainer,
    BeatTitle,
    DescContainer,
    BeatDescription,
} from './styles'

export default function Beat({ children, ...restProps }) {
    return (
        <ContainerGrid {...restProps}>{children}</ContainerGrid>
    )
}

Beat.Icon = function BeatIcon({ icon, ...restProps }) {
    const Icon = icon
    return (
        <IconContainer {...restProps}>
            <IconButton>
                <Icon style={{fontSize: '2.65rem', color: '#2276e7' }}></Icon>
            </IconButton>
        </IconContainer>
    )
}

Beat.Info = function BeatInfo({ children, title, desc, ...restProps }) {
    return (
        <InfoContainer {...restProps}>
            <TitleContainer >
                <BeatTitle>{title}</BeatTitle>
            </TitleContainer>
            <DescContainer >
                <BeatDescription>{desc}</BeatDescription>
            </DescContainer>
        </InfoContainer>
    )
}
