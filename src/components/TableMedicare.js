import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    position: "absolute",
    width: "1040px",
    height: "48px",
    left: "360px",
    top: "360px",
    background: "#ffffff",
    border: "1px solid #E4E4E4",

  },
  tableRightBorder:{
    borderWidth:1.5,
    borderRadius:'16px',
    borderColor:'#E4E4E4',
    borderStyle:'solid'
  },
  text:{
    width:'40px',height:'24px',fontWeight:"500"
  },
  icon: {
    position:'absolute',
    fontSize: "16px",
        lineHeight: "10.67px",
    marginLeft: "5px",
    color: "#828282",
    top: "18px",
  },
  


});

function createData(Plan) {
  return { Plan};
}

const rows = [
  createData(
    "Annual In-Network Deductible",
    
  ),
];

export default function TableMedicare() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        
          <TableRow>
            <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Plan Type</span>
             <InfoRoundedIcon className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
            Medicare Advantage (Local PPO)
            </TableCell>
            
            
          </TableRow>


          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Annual In-Netwoek Deductible</span>
             <InfoRoundedIcon style={{top:'70px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        This plan does not have a medical deductible.
            </TableCell>
            
          </TableRow>

          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Annual Out-of-Netwoek Deductible</span>
             <InfoRoundedIcon style={{top:'125px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        This plan does not have a medical deductible.
            </TableCell>
          
            
          </TableRow>
          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Out-of-Pocket Maximum</span>
             <InfoRoundedIcon style={{top:'190px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        $7550 for services you receive from in-network providers. $11300 for services you receive from any provider.
            </TableCell>    
          </TableRow>

          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Office Visit for Primary Doctor</span>
             <InfoRoundedIcon style={{top:'263px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        In-network: $0 copay <br />Out-of-network: $0 copay
            </TableCell>
          
            
          </TableRow>
    
          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Prescription Drug Coverage</span>
             <InfoRoundedIcon style={{top:'325px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        YES
            </TableCell>
          
            
          </TableRow>
    

          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Dental Services</span>
             <InfoRoundedIcon style={{top:'380px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        YES
            </TableCell>
          
            
          </TableRow>
    
          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Vision Services</span>
             <InfoRoundedIcon style={{top:'434px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        YES
            </TableCell>
          
            
          </TableRow>
    

          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Hearing Services</span>
             <InfoRoundedIcon style={{top:'485px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        YES
            </TableCell>
          
            
          </TableRow>
    

          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Over-the-Counter Benefits</span>
             <InfoRoundedIcon style={{top:'540px'}} className={classes.icon} />              
            </TableCell>

            <TableCell style={{width:'600px'}} align="left" className={classes.tableRightBorder}>
        YES
            </TableCell>
          
            
          </TableRow>
    
          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Fitness Benefits</span>
             <InfoRoundedIcon style={{top:'590px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        YES
            </TableCell>
          
            
          </TableRow>

          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Transportation Services</span>
             <InfoRoundedIcon style={{top:'645px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        YES
            </TableCell>
          
            
          </TableRow>
    
          <TableRow>
          <TableCell style={{width:'440px'}} className={classes.tableRightBorder}>
             <span className={classes.text}>Telehealth Services</span>
             <InfoRoundedIcon style={{top:'700px'}} className={classes.icon} />              
            </TableCell>

            <TableCell align="left" className={classes.tableRightBorder}>
        YES
            </TableCell>
          
            
          </TableRow>
    

    


        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
             
              {/* <TableCell  className={classes.tableRightBorder} align="right">{row.data}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
 );
}
