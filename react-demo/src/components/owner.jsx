import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@material-ui/styles';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { color, width } from '@mui/system';
import Dropdown from './dropdown';
import { ThemeContext } from '@mui/styled-engine';
import reactDom from 'react-dom';






const useStyles = makeStyles(theme => ({
    paper: {
    },
    input:{
        backgroundColor: "#1E1E1E",
        margin: "5px !important",
        pointerEvents: 'click'

        // marginTop: "8px !important",
        // border: "1px solid grey !important",
    },
    tag:{
        right: "0px",
        border: "1px solid grey !important",
        borderRadius: 4
    }

})

);


const Owner = () => {
    const c = useStyles()
    return <React.Fragment>
        <TextField hid sx={{width:"200px"}} size="small" id="outlined-basic"  align="left" className={c.input} label="Name" variant="filled" />
        <TextField size="small" sx={{width:"290px"}} id="outlined-basic" align="left" className={c.input} label="Wallet Address" variant="filled" />
        <TextField size="small"
         sx={{width:"75px", marginRight:"0px !important"}}
          id="filled-number"
          className={c.input} 
          height={45}
          label="%"
          type="number"
          InputLabelProps={{
            shrink: true,
            height: "45px"
          }}
          variant="filled"
        />
        </React.Fragment>


}

export default Owner;