import React from 'react'
import Sponsors from './sponsors'
import {emb, siemens, megatronic, ieee, nekh} from '../images'

export default function SponsorsContainer() {
    return (
        <Sponsors>
            <Sponsors.Title>Previous Sponsors</Sponsors.Title>
            <Sponsors.Carousel>
                <Sponsors.Logo src={siemens} alt="logo" width={2.5}/>
                <Sponsors.Logo src={megatronic} alt="logo" width={1} />
                <Sponsors.Logo src={ieee} alt="logo" width={1.8}/>
                <Sponsors.Logo src={emb} alt="logo" width={1.39}/>
                <Sponsors.Logo src={nekh} alt="logo" width={3.47}/>
            </Sponsors.Carousel>
        </Sponsors>
    )
}



