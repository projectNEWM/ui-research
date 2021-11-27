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


const SongInfo = () => {
    const c = useStyles()
    return <Paper className={c.paper} sx={{
        height: 300
    }} >
        <Typography variant="h6" align="left" pl={"15px"} color="white">Song Info</Typography>

        <TextField color="primary"  size="small" id="outlined-basic"  align="left" className={c.input} label="Title" variant="outlined" />
        <TextField size="small"  id="outlined-basic" align="left" className={c.input} label="Performer" variant="outlined" />
        <Dropdown />
        <TextField size="small" multiline rows={3.5} id="outlined-basic" align="left" className={c.tag} label="Tag / Description" variant="outlined" />

        


    </Paper>

}

export default SongInfo;