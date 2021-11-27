import './App.css';
import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import {CSSTransition} from 'react-transition-group';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import AnimatedCursor from "react-animated-cursor"



import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { grid } from '@mui/system';

import Header from "./components/header";
import Content from "./components/content";
import Details from "./components/details";
import Buttons from "./components/buttons";
import Form from "./components/form.jsx";
import { useTheme } from '@material-ui/core';
import { Typography } from '@mui/material';

import musicIcon from './components/music-icon.png'
import catalogue from './components/catalogue.jpg'

const useStyles = makeStyles(() => ({
  dark: {
      color: 'black'
  },
  hr: {
    height: "2px",
    borderWidth: 0,
    background: "linear-gradient(to right, #4f9946,#7b1e1c,#652776,#0f5e7b)"
  },
  inactive: {
    display: "none !important"
  },
  hidden: {
    opacity: "0px !important"
  },
  removeButton: {
    display: "none !important"
  },
  submitButton: {
    background: "linear-gradient(to right, #c234d1 0%, #8a37bf 51%, #4935b0 100%)",
    color: "white !important",
    marginBottom:"10px"
},

})
);

function App() {
  const c = useStyles()
  const containerRef = React.useRef(null);
  const [state, setState] = useState(
    {
      showForm: false,
      showButton: false,
      showAdd: true
    }
  )
  async function handleButtonClick() {

    setState({
      showAdd:false,
      showButton:false
    })
    await timeout(200)
    setState({
      removeButton:true,
      showForm:true
    }); 

  
  }
  function handleAdd() {
    if(!state.showForm)
      {   
        setState({
        showAdd: false,
        showButton: true
        }); 
      }
  }
  async function handleFormButtonClick() {
      setState({
        showForm: false
      })
      await timeout(1000)
      setState({
        showAdd: true,
      }); 
  
  }
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  async function handleButtonLeave() {
    if(!state.showForm) {
      setState({
        showButton: false,
      })
      var delay = 500
      await timeout(delay)
      setState({
        showAdd: true,
      })
    }

  
  }

  return (
    <div className="App" >
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>


        <Fade in={state.showAdd} unmountOnExit style={{ transformOrigin: '0 0 0',transitionDelay:"0ms" }} {...(state.showAdd ? { timeout: 1000 } : {})}>
          <IconButton className={!state.showAdd ? c.inactive : ""} size="large" onMouseEnter={handleAdd} onClick={handleAdd} sx={{color:"white"}} >
            <AddIcon fontSize="large"/>
          </IconButton>
        </Fade>

        <Grow in={state.showAdd} unmountOnExit style={{ transformOrigin: '720 1000 0',transitionDelay:"0ms" }} {...(state.showAdd ? { timeout: 1000 } : {})}>
          <CardMedia margin={"10px"} component="img" image={catalogue} sx={{width:"35%", marginTop:"60px", marginLeft: "auto !important", marginRight: "auto !important"}}/>
        </Grow>


        {/* className={state.removeButton ? c.removeButton : ""} */}
        {/* <CSSTransition in={state.showButton} timeout={400} classNames="button" unmountOnExit> */}
        <Grow in={state.showButton} unmountOnExit style={{ transformOrigin: '720 0 0',transitionDelay:"300ms" }} {...(state.showButton ? { timeout: 1000 } : {})}>
          <Paper onMouseLeave={handleButtonLeave} sx={{ backgroundColor:"#0B0E0D"}} >
            <CardMedia margin={"10px"} component="img" image={musicIcon} sx={{width:"2%", marginTop:"10px", marginLeft: "auto", marginRight:"auto"}}/>
            <Typography margin={"10px"} variant="body2" sx={{fontSize:17}}> <strong>Drag</strong> Your Next Big Hit <strong>Here </strong> </Typography>
            <Typography margin={"10px"} variant="body2" color="primary" sx={{fontSize:12}}> OR </Typography>
            <Button  variant="contained" className={c.submitButton} margin={"10px"} sx={{marginBottom:"15px !important"}} onClick={handleButtonClick}> Upload Audio File</Button>
            <hr className={c.hr} ></hr>

          </Paper>
        </Grow>
        {/* <Slide direction="right" container={containerRef.current}>

         </Slide> */}

        <Slide direction="left" unmountOnExit in={state.showForm} style={{ transformOrigin: '0 0 0' }} {...(state.showForm ? { timeout: 1000 } : {})}>
          <div >
            <Form buttonClick={handleFormButtonClick}/>
            <hr className={c.hr} ></hr>
          </div>
        </Slide> 
      </Grid>


         

    </div>
  );
}

export default App;
