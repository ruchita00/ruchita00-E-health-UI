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
      left:'360px',
      borderRadius:'16px',
      border:'1px solid #E4E4E4',background:'#FFFFFF'
  },
//   sorticon: {
//     position: "relative",
//     width: "97px",
//     height: "22px",
//     left: "2px",
//     top: "-22px",
//     fontSize: "24px",
//     display: "flex",
//   },
//   sorticon1: {
//     position: "relative",
//     width: "97px",
//     height: "22px",
//     left: "150px",
//     top: "-22px",
//     fontSize: "24px",
//     display: "flex",
//   },
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

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Name
              {/* <SortIcon className={classes.sorticon} /> */}
            </TableCell>
            <TableCell align="right">
              Start Date
              {/* <SortIcon className={classes.sorticon1} /> */}
            </TableCell>
            <TableCell align="right">
              Expiry Date
              {/* <SortIcon className={classes.sorticon1} /> */}
            </TableCell>
            <TableCell align="right" >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="right">{row.startdate}</TableCell>
              <TableCell align="right">{row.expirydate}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
 );
}
