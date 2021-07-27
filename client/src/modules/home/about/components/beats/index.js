import React from 'react' ;
import Beat from '../beat';
import {BeatsContainerGrid, BeatsContainer, Title, TitleContainer} from './styles';

export default function Beats({ children, ...restProps }) {
    return (
        <BeatsContainerGrid {...restProps}>{children}</BeatsContainerGrid>
    )
}

Beats.Title = function BeatsTitle({...restProps }) {
    return (
        <TitleContainer>
            <Title {...restProps} >OUR BEATS</Title>
        </TitleContainer>
    )
}

Beats.All = function AllBeats({ beats, ...restProps }) {
    return (
        <BeatsContainer {...restProps}>
            {beats.map((beat) => {
                return (
                    <Beat icon={beat.icon} title={beat.title} desc={beat.desc} />
                )
            })}
        </BeatsContainer>
    )
}

