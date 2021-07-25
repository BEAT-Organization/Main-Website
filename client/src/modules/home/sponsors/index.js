import React from 'react'
import Sponsors from './sponsors'
import {emb, siemens, megatronic, ieee, nekh} from '../images'

export default function SponsorsContainer() {
    return (
        <Sponsors>
            <Sponsors.Title>Previous Sponsors</Sponsors.Title>
            <Sponsors.Logo src={siemens} alt="logo" />
            <Sponsors.Logo src={megatronic} alt="logo" />
            <Sponsors.Logo src={emb} alt="logo" />
            <Sponsors.Logo src={ieee} alt="logo" />
            <Sponsors.Logo src={nekh} alt="logo" />
        </Sponsors>
    )
}

