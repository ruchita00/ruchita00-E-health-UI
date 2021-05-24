import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles({
  table: {
    position:'absolute',
      width:"1024px",
      height:'96px',
      top:'312px',
      // borderTopWidth:'6',
      // borderColor:'#E4E4E4',
      // borderSideWidth:'6',
      // borderBottomWidth:'6',
      // borderTopWidth:'1',

      left:'360px',
      borderRadius:'16px',
      border:'1px solid #E4E4E4',background:'#FFFFFF'
  },
  tableRightBorder:{
    borderWidth:1.5,
    borderRadius:'16px',
    borderColor:'#E4E4E4',
    borderStyle:'solid'
  },
  // sorticon: {
  //   position: "relative",
  //   width: "97px",
  //   height: "22px",
  //   left: "2px",
  //   top: "-22px",
  //   fontSize: "24px",
  //   display: "flex",
  // },
  sorticon:{
    width:'24px',height:'16px',left:'433px',top:'328px'
              ,fontWeight:'400'
  },
  text:{
    width:'40px',height:'24px'
  }
});

function createData(name, startdate, expirydate, status) {
  return { name, startdate, expirydate, status };
}

const rows = [
  createData(
    "Medicare Advantage-AARP-009878",
    "April 10,2021",
    "June 10,2021",
    "Active"
  ),
];

export default function MedicareTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableRightBorder}>
              <span className={classes.text}>Name</span>
              <SortIcon className={classes.sorticon}
    
               />
            </TableCell>
            <TableCell  className={classes.tableRightBorder} align="center">
              <span className={classes.text}>Start Date</span>
              <SortIcon className={classes.sorticon} />
            </TableCell>
            <TableCell  className={classes.tableRightBorder} align="center">
              <span className={classes.text}>Expiry Date</span>

              <SortIcon className={classes.sorticon} />
            </TableCell>
            <TableCell  className={classes.tableRightBorder} align="center" >
            <span className={classes.text}>Status</span>

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell  className={classes.tableRightBorder} component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell  className={classes.tableRightBorder} align="center">{row.startdate}</TableCell>
              <TableCell  className={classes.tableRightBorder} align="center">{row.expirydate}</TableCell>
              <TableCell  className={classes.tableRightBorder}  align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
 );
}
