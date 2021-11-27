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
import Owner from './owner';
import { IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';





const useStyles = makeStyles(theme => ({
    paper: {
    },
    input:{
        right: "0px",
        width: "240px",
        marginTop: "8px !important",
        border: "1px solid grey !important",
        borderRadius: 4
    },
    tag:{
        right: "0px",
        width: "240px",
        border: "1px solid grey !important",
        borderRadius: 4
    }


})

);

let counter = 0

const Ownership = () => {
    const containerRef = React.useRef(null);

    const c = useStyles()
    const [state, setState] = useState(
        {
        showOwner0: true,
        showOwner1: false,
        showOwner2: false
        })
    function handleClick() {
    
        // if (counter == 0) {
        //     console.log(state.showOwner0)
        //     setState({        
        //         showOwner0: true,
        //         showOwner1: false,
        //         showOwner2: false})
        //     console.log(state.showOwner0)

        // } 
        if (counter == 0) {
            setState({             
                showOwner0: true,
                showOwner1: true,
                showOwner2: false})
        } if (counter == 1) {
            setState({                
                showOwner0: true,
                showOwner1: true,
                showOwner2: true})
        }
        counter++
        console.log(counter)
    }
    return <div sx={{width:"620px !important"}}>
    <Grid container>
        <Grid item xs={10}>
            <Typography  variant="h6" align="left" pl={"15px"} color="white">Ownership</Typography>
        </Grid>
        <Grid item xs={2}>
            <IconButton xs={2} onClick={handleClick} item align="right" sx={{color:"white"}} >
                <AddIcon fontSize="medium"/> 
            </IconButton> 
        </Grid>
    </Grid>    


    <Grow  in={state.showOwner0} style={{ transformOrigin: '0 0 0' }} {...(state.showOwner0 ? { timeout: 1000 } : {})}>
     <div>
         <Owner />
     </div>
    </Grow>
    <Grow  in={state.showOwner1} style={{ transformOrigin: '0 0 0' }} {...(state.showOwner1? { timeout: 1000 } : {})}>
     <div>
         <Owner />
     </div>
    </Grow>
    <Grow  in={state.showOwner2} style={{ transformOrigin: '0 0 0' }} {...(state.showOwner2 ? { timeout: 1000 } : {})}>
     <div>
         <Owner />
     </div>
    </Grow>
    </div>


}

export default Ownership;