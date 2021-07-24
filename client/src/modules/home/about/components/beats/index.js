import React from 'react' ;
import Beat from '../beat';
import beats from '../../constants';
import {ContainerGrid, BeatsContainer, Title} from './styles';

export default function Beats({ children, ...restProps }) {
    return (
        <ContainerGrid {...restProps}>{children}</ContainerGrid>
    )
}

Beats.Title = function BeatsTitle({...restProps }) {
    return <Title {...restProps} >OUR BEATS</Title>
}

Beats.All = function AllBeats({ children, title, desc, ...restProps }) {
    return (
        <BeatsContainer {...restProps}>
            {beats.map((beat) => {
                return (
                    <Beat
                        icon={beat.icon}
                        title={beat.title}
                        desc={beat.desc}
                    />
                )
            })}
        </BeatsContainer>
    )
}

