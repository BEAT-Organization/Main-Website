import React from 'react'
import {Button,Grid, Typography,Divider} from '@material-ui/core'
function Beat(props) {
    const {icon,title,desc} = props;
    return (
        <Grid container item justify="space-around" alignContent="center" style={{marginBottom:"20px"}}> 
            <Grid container justify="center" alignItems="center" item md={1} sm={2} xs={3} >
                <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px', background: '#000c26'}}>
                    {React.createElement(icon, { fontSize: "large",style:{ color: "#2276e7" } })}
                </Button>
            </Grid>
            <Grid container direction="column" item md={10} sm={10} xs={9} justify="space-around" >
                <Grid item >
                    <Typography variant="h6" style={{fontSize:"1.5em",fontFamily:"'Inter', sans-serif", color:"#2276e7"}}>{title}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body1" style={{fontSize:"1.25em",fontFamily:"'Inter', sans-serif", color:"#000c26"}}> {desc}</Typography> 
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Beat
