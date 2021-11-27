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
import Grid from '@mui/material/Grid';
import Content from "./content";
import Details from "./details";
import Buttons from "./buttons";





const useStyles = makeStyles(theme => ({
    paper: {
    },
    input:{
        right: "0px",
        width: "240px",
        marginTop: "8px !important",
        border: "1px solid #1D1D1D !important",
        borderRadius: 4,
        backgroundColor: "#121212"
    },
    tag:{
        right: "0px",
        backgroundColor: "#121212",
        width: "240px",
        border: "1px solid #1D1D1D !important",
        borderRadius: 4
    }

})

);


const Form = (props) => {
    const c = useStyles()

      return <React.Fragment>
    
      <Grid sx={{marginTop:"15px !important"}} item container backgroundColor="#0B0E0D" >
      <Grid  item xs={12}>
        <Content /> 
      </Grid>
    </Grid>
  
    <Grid item container backgroundColor="#0B0E0D" direction="row">
      <Grid  item xs={9}>
        <Details />
      </Grid>
      <Grid  item xs={3}>
        <Buttons buttonClick={props.buttonClick}/>
      </Grid>
  
    </Grid>
    </React.Fragment>
      

}

export default Form;