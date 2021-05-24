import React from 'react'
import {Container, Paper,Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const useStyles = makeStyles((theme)=>({
paddingTop:theme.spacing(25),
borderShadow:'1rem',

}))


const PaperVisit = () => {
    return (
        <Container >
            <Paper style={{borderRadius:'15px'}} elevation={3} component={Box} width='200px' height='120px' p={4} >
                <Box component='form'><KeyboardArrowRightRoundedIcon 
                style={{position:'relative'
                ,top:'-20px',left:'130px',
                color:"gray"}} />
                <LocalHospitalIcon fontSize="large" style={{position:'relative'
                ,top:"-10px",color: '#A32035',left:'-20px'}} />
                <span style={{fontSize:'16px',position:'relative',
                top:'27px',right:'60px'
                ,fontWeight:'500'}}><span style={{color:'#2D9CDB'}}>4</span> Visits</span></Box>
            </Paper>
            <Paper 
             style={{borderRadius:'15px',position:'relative',left:'220px',bottom:'10px',top:'-120px'}} elevation={3} component={Box} width='200px' height='120px' p={4}>
                <Box component='form'><KeyboardArrowRightRoundedIcon 
                style={{position:'relative'
                ,top:'-20px',left:'130px',
                color:"gray"}} />
                <AccessibilityIcon fontSize="large" style={{position:'relative'
                ,top:"-10px",color: '#2D9CDB',left:'-20px'}} />
                <span style={{fontSize:'16px',position:'relative',
                top:'27px',right:'60px'
                ,fontWeight:'500'}}> Vitals</span></Box>
            </Paper>

            

        </Container>
    )
}

export default PaperVisit
