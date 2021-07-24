import React from 'react'
import About from './about'
import beats from './constants'

import { Container, Grid } from '@material-ui/core'
import Beat from '../components/helper/Beat'

export function Abouty(){
    return(
        <About>
            <About.Title/>
            <About.Targets>
                <About.Vision>
                    <About.Vision.Title/>
                    <About.Vision.Img/>
                    <About.Vision.Description/>
                </About.Vision>
                <About.Mission>
                    <About.Mission.Title/>
                    <About.Mission.Img/>
                    <About.Mission.Description/>
                </About.Mission>
            </About.Targets>
            <About.Beats>
                <About.Beats.Title/>
                <About.Beats.All beats={beats}/>
            </About.Beats>
        </About>
    )
}

function About() {
    return (
        <div>












            <Grid container>











                <Grid item md={12} xs={12} style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3em', color: '#000b26' }}>
                        About US &nbsp;
                        <i
                            className="fas fa-info-circle"
                            aria-hidden="true"
                        ></i>
                    </h1>
                </Grid>



















                <Grid
                    item
                    md={6}
                    xs={12}
                    style={{ textAlign: 'center', padding: '15px' }}
                >
                    <h1 style={{ color: '#d1242a', marginTop: '0px' , fontSize:'1.8em' }}> VISION </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="180"
                        height="180"
                        viewBox="0 0 24 24"
                    >
                        <path fill="#000c26" d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
                    </svg>


                    <p style={{fontSize:'1.25em', color:'#000b26'}}>
                        Our vision is to develop the stakeholders of entire healthcare system.
                    </p>

                    <h1 style={{ color: '#d1242a', margin:'6vh 0vw',fontSize:'1.8em'  }}>MISSION</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="180"
                        height="180"
                        viewBox="0 0 24 24"
                    >
                        <path fill="#000c26" d="M23.948.042c-.413-.028-.817-.042-1.214-.042-8.6 0-13.497 6.557-15.278 11.833l4.727 4.727c5.428-1.944 11.817-6.66 11.817-15.168 0-.44-.017-.89-.052-1.35zm-11.277 14.178l-2.883-2.883c1.221-2.859 4.691-8.945 12.199-9.32-.251 5.775-4.041 9.932-9.316 12.203zm5.471 1.538c-.547.373-1.09.71-1.628 1.011-.187.891-.662 1.842-1.351 2.652-.002-.576-.162-1.156-.443-1.738-.495.225-.966.418-1.414.588.66 1.709-.012 2.971-.915 4.154 1.296-.098 2.656-.732 3.728-1.805 1.155-1.155 1.967-2.823 2.023-4.862zm-11.82-6.469c-.579-.28-1.158-.438-1.732-.441.803-.681 1.744-1.153 2.626-1.345.314-.552.667-1.097 1.039-1.633-2.039.055-3.708.867-4.864 2.023-1.071 1.071-1.706 2.433-1.804 3.728 1.184-.904 2.446-1.576 4.155-.914.173-.471.366-.944.58-1.418zm7.738.663c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0c.391.392.391 1.024 0 1.415s-1.024.39-1.414-.001zm4.949-4.951c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.049 0 2.829.781.781 2.048.781 2.829 0 .78-.78.78-2.047-.001-2.829zm-1.908 1.911c-.273-.273-.273-.718 0-.99.271-.273.717-.273.99 0 .272.272.271.717 0 .99-.274.272-.718.272-.99 0zm-6.747 10.65c-1.492 3.81-5.803 6.208-10.354 6.438.219-4.289 2.657-8.676 6.64-10.153l.805.806c-4.331 2.755-4.653 5.346-4.665 6.575 1.268-.015 4.054-.344 6.778-4.464l.796.798z" />
                    </svg>
                    <p style={{fontSize:'1.25em', marginTop: '5vh', color: '#000b26'}}>
                       Our mission is to achieve the 7 beats. 
                    </p>
                </Grid>
























                <Grid
                    container
                    direction="column"
                    item
                    md={6}
                    xs={12}
                    style={{ padding: '15px' }}
                >
                    <h1
                        style={{
                            color: '#fc414a',
                            marginTop: '0px',
                            color: '#2276e7',
                            textAlign: 'center',
                            fontSize:'1.8em'
                        }}
                    >
                        OUR BEATS
                    </h1>
                    {beats.map((beat) => {
                        return (
                            <Beat
                                icon={beat.icon}
                                title={beat.title}
                                desc={beat.desc}
                            />
                        )
                    })}
                </Grid>












            </Grid>














        </div>
    )
}

export default About
