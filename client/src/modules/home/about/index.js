import React from 'react'
import {default as About, Vision, Mission, Beats} from './about'
import beats from './constants'


export default function AboutContainer(){
    return(
        <About>
            <About.Title/>
            <About.Targets>
                <Vision>
                    <Vision.Title/>
                    <Vision.Img/>
                    <Vision.Description/>
                </Vision>
                <Mission>
                    <Mission.Title/>
                    <Mission.Img/>
                    <Mission.Description/>
                </Mission>
            </About.Targets>
            <Beats>
                <Beats.Title/>
                <Beats.All beats={beats}/>
            </Beats>
        </About>
    )
}
