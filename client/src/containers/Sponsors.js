import React from 'react'
import Sponsors from '../components/sponsors/indexs'
import Logo1 from '../images/semlogo.png'
import Logo2 from '../images/ieeelogo.png'
import Logo3 from '../images/emblogo.png'
import Logo4 from '../images/nekhlogo.png'
import Logo5 from '../images/megalogo.jpg'


export function SponsorsContainer() {
    return (
        <Sponsors>
            <Sponsors.Title>Previous Sponsors</Sponsors.Title>
                        <Sponsors.Link href="/home">  
                        </Sponsors.Link>
           <Sponsors.Logo  src={Logo1} alt="logo" /> 
           <Sponsors.Logo  src={Logo2} alt="logo" /> 
           <Sponsors.Logo  src={Logo3} alt="logo" /> 
           <Sponsors.Logo  src={Logo4} alt="logo" /> 
           <Sponsors.Logo1  src={Logo5} alt="logo" />  
        </Sponsors>
    )
}

export default SponsorsContainer

