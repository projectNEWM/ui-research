import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles, withThemeCreator } from '@material-ui/styles';
import music from "./music.png";
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import Button from '@mui/material/Button';
import { textAlign, width } from '@mui/system';
import { SpaceBar } from '@material-ui/icons';
import { useState } from 'react';





const useStyles = makeStyles(() => ({
    submitButton: {
         background: "linear-gradient(to right, #c234d1 0%, #8a37bf 51%, #4935b0 100%)",

        // backgroundColor: "#468189",
        // textAlign: "center",
        // transition: "0.5s",
        // backgroundSize: "200% auto",
         color: "white !important",
        // borderRadius: "10px"
        width: "200px",
        marginLeft: "7x !important",
        marginRight: "15px !important"
    },
    cancelButton:{
        marginLeft: "15px !important",
        marginRight: "7px !important"
    }

})

);


const Buttons = (props) => {
    const c = useStyles()
    return <React.Fragment>
        <Button variant="outlined" onClick={props.buttonClick} className={c.cancelButton}>Cancel </Button>
        <Button variant="contained" onClick={props.buttonClick} className={c.submitButton}>Mint now for $12.34</Button>
    </React.Fragment>

}
export default Buttons; 