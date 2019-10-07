import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import fetchApi from './fetchApi';

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

const PrintPanel = ({printerName}) => {
  const classes = useStyles();
  const [poNumber, setPoNumber] = useState('');
  const [lineNumber, setLineNumber] = useState('');
  const [unitNumber, setUnitNumber]= useState('');
  const [quantity, setQuantity] = useState('');
  const [supplierBarcode, setSupplierBarcode] = useState('');
  const [copies, setCopies] = useState(1);

  const handleChange = (event) => {
    console.log(event.target.value);
  }
  
  const printLabel = () => {
    const labelId = [poNumber, lineNumber, quantity, unitNumber].join('-');
    const jsonRequest1 = {};
    jsonRequest1['mmsBarcode'] = labelId;
    jsonRequest1['supplierBarcode'] = supplierBarcode;
    console.log(jsonRequest1);

    const jsonRequest2 = {};
    jsonRequest2['labelId'] = labelId;
    jsonRequest2['copies'] = copies;
    jsonRequest2['printerName'] = printerName;
    console.log(jsonRequest2);

    fetchApi('/').post('raw-label-print/api/receipt', jsonRequest1).then(() => {
      console.log('HEY');
      fetchApi('/').post('raw-label-print/api/print', jsonRequest2).then((result) => {
        console.log(JSON.stringify(result));
      });
    });
  }

    return (
      <div>
      <div className={classes.firstRowContainer}>
        <TextField
          required
          id="outlined-required"
          label="PO NO."
          value={poNumber}
          className={classes.textField}
          onChange={(event) => setPoNumber(event.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Line NO."
          value={lineNumber}
          className={classes.textField}
          onChange={(event) => setLineNumber(event.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Quantity"
          value={quantity}
          className={classes.textField}
          onChange={(event) => setQuantity(event.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Unit NO."
          value={unitNumber}
          onChange={(event) => setUnitNumber(event.target.value)}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
       </div>
       <div className={classes.secondRowContainer}>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Supplier Barcode"
          value={supplierBarcode}
          className={classes.textField}
          onChange={(event) => setSupplierBarcode(event.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Copies"
          value={copies}
          className={classes.textField}
          onChange={(event) => setCopies(event.target.value)}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className={classes.thirdRowContainer}>
        <Button variant="contained" size="large" color="primary" className={classes.button} onClick={printLabel}>
          Print
        </Button>
      </div>
    </div>
  )
}

export default PrintPanel;