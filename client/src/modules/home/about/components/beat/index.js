import React from 'react'
import Beat from './beat'

export default function BeatContainer(props){
    const {icon,title,desc} = props;
    return(
        <Beat>
            <Beat.Icon icon={icon}/>
            <Beat.Info title={title} desc={desc}/>
        </Beat>
    )
}
