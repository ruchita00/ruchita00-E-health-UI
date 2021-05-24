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
    minWidth: 650,
    position: "absolute",
    width: "970px",
    height: "85px",
    left: "280px",
    top: "230px",
    background: "#ffffff",
    border: "1px solid #E4E4E4",

  },


});

function createData(name, startdate, expirydate, status) {
  return { name, startdate, expirydate, status };
}

const rows = [
  createData(
    "Medicare Advantage-AARP-009878",
    // "April 10,2021",
    // "June 10,2021",
    // "Active"
  ),
];

export default function TableMedicare() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Plan Type 
              {/* <SortIcon className={classes.sorticon} /> */}
            </TableCell>
            <TableCell align="right">
              Medicare Advantage
              {/* <SortIcon className={classes.sorticon1} /> */}
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
