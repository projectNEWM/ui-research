import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@material-ui/styles';
import music from "./music.png";
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';





const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: 'paper'
    }

})

);


const Details = () => {
    const c = useStyles()
    return <React.Fragment>
        
      <Typography padding="15px" paddingLeft="15px" align="left" variant="body2">Relase Date: <strong>12.12.2021</strong> • Running Time: 3:43:12m • Tempo: <strong> 120 BPM</strong> • Original Filename: <strong>mysuperhit_MAS.was</strong></Typography>
    </React.Fragment>

}
export default Details; 