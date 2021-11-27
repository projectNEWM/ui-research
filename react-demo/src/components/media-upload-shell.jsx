import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import upload from "./upload.jpg";




import { makeStyles } from '@material-ui/styles';




const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: 'paper'
    }

})

);


const MediaUploadShell = (props) => {
    const c = useStyles()
    return <Box
    sx={{
      display: 'flex',
      '& > :not(style)': {
        m: 1,
        width: 300,
        height: 300,
        backgroundColor: '#0C0E0D'
      },
    }}
    >

    <CardMedia
        component="img"
        image={props.src}
      />
    </Box>

}

export default MediaUploadShell;