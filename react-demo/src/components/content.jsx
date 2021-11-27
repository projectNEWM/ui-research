import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid, Box, Paper, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import  MediaUploadShell from './media-upload-shell';
import  SongInfo from './song-info';
import  SongImg from './song-img';
import  Ownership from './ownership';
import  Lyrics from './lyrics';
import  Buttons from './buttons';
import  MediaUpload from './media-upload';



const useStyles = makeStyles(() => ({

    paper: {
        height: 300,
        marginTop: 10,
        paddingTop: '0px'
    },
    gridItem :{
        paddingTop: "12px !important"
    }

})



);


const Content = () => {
    const theme = useTheme()

    const c = useStyles()
    
    return <Grid container spacing={1.5}> 
        <Grid item xs={2.25}>
            <MediaUpload />
        </Grid>
        
        <Grid className={c.gridItem} item xs={2}>
            <SongInfo />
        </Grid>
        <Grid  item xs={5}>
            <SongImg />
            <Ownership /> 
        </Grid>
        <Grid item xs={2}>
            <Lyrics />
        </Grid>
    </Grid>

}

export default Content;