import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@material-ui/styles';
import music from "./music.png";




const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: 'paper'
    }

})

);


const SongImg = () => {
    const c = useStyles()
    return <Box
    sx={{
      display: 'flex',
      '& > :not(style)': {
        m: 1,
        backgroundColor: '#0C0E0D'
      },
    }}
    >

    <CardMedia
        component="img"
        image={music}
        sx={{width:"590px"}}
      />
    </Box>

}
export default SongImg; 