import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    position:'absolute',
    border:'1px solid gray',
    borderRadius:'5px',
    top:'502px',
    left:'360px',
    width:'175px',
    height:'40px',
    backgroundColor:'#ffffff'

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 140,
    top:'6px'
  },
}));

export default function DatePage() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
    <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /> 
    </form>
  );
    }