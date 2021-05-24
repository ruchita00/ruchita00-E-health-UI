import React from 'react'
import {Container, Paper,Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles((theme)=>({
paddingTop:theme.spacing(20),
borderShadow:'1rem'
}))


const Papers = () => {
    return (
        <Container >
            <Paper  style={{borderRadius:'15px'}} elevation={3}
 component={Box} width='200px'  height='120px' p={4}>
                <Box component='form'><KeyboardArrowRightRoundedIcon 
                style={{position:'relative'
                ,top:'-20px',left:'130px',
                color:"gray"}} />
                <ReceiptIcon fontSize="large" style={{position:'relative',top:"-10px",color: '#9B51E0',left:'-20px'}} />
                <span style={{fontSize:'16px',position:'relative',top:'27px',right:'60px',fontWeight:'500'}}><span style={{color:'#2D9CDB'}}>5</span> Bills</span></Box>
            </Paper>
            {/* style={{borderRadius:'15px',position:'relative',left:'220px',bottom:'10px',top:'-120px'}} elevation={3} component={Box} */}
    
            <Paper style={{borderRadius:'15px',position:'relative',left:'220px',bottom:'10px',top:'-120px'}} elevation={3}
 component={Box} width='200px' height='120px' p={4}>
                <Box component='form'><KeyboardArrowRightRoundedIcon 
                style={{position:'relative'
                ,top:'-20px',left:'130px',
                color:"gray"}} />
                <ReceiptIcon fontSize="large"
                 style={{position:'relative',
                 top:"-10px",color: '#9B51E0'
                 ,left:'-20px'}} /> <div 
                 style={{position:'absolute',
                 fontSize:'14px',height:"0px",
                top:'80px',
                left:'30px',fontWeight:'500'}}>
                <span><span style={{color:'#2D9CDB',}}>
                1</span> Claim in progress</span></div></Box>
            </Paper>  
    
        </Container>
    )
}

export default Papers
