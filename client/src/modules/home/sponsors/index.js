import React from 'react'
import Sponsors from './sponsors'
import {logos} from './images/logos'

export default function SponsorsContainer() {
    return (
        <Sponsors>
            <Sponsors.Title>Previous Sponsors</Sponsors.Title>
            <Sponsors.Logo src={logos.siemens} alt="logo" />
            <Sponsors.Logo src={logos.megatronic} alt="logo" />
            <Sponsors.Logo src={logos.emb} alt="logo" />
            <Sponsors.Logo src={logos.ieee} alt="logo" />
            <Sponsors.Logo src={logos.nekh} alt="logo" />
        </Sponsors>
    )
}

