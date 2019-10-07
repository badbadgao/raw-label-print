import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  firstRowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    margin: '10px auto',
  },
  secondRowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    margin: '10px auto',
    alignItems: 'center',
  },
  thirdRowContainer: {
    display: 'flex',
    width: '60%',
    margin: '10px auto',
    alignItems: 'right',
    justifyContent: 'flex-end',

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    height: '53px',
    width: '120px',
    marginRight: '8px',
  }
}));

const PrintPanel = () => {
  const classes = useStyles();
  const [poNumber, setPoNumber] = useState('');
  const [lineNumer, setLineNumber] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
  }

    return (
      <div>
      <div class={classes.firstRowContainer}>
        <TextField
          id="outlined-required"
          label="PO NO."
          className={classes.textField}
          onChange={(event) => handleChange(event, 'name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-required"
          label="Line NO."
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Quantity"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Unit NO."
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
       </div>
       <div class={classes.secondRowContainer}>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Supplier Barcode"
          className={classes.textField}
          onChange={(event) => handleChange(event, 'name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Copies"
          defaultValue={1}
          className={classes.textField}
          onChange={(event) => handleChange(event, 'name')}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className={classes.thirdRowContainer}>
        <Button variant="contained" size="large" color="primary" className={classes.button}>
          Print
        </Button>
      </div>
    </div>
  )
}

export default PrintPanel;