import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import AnimatedCursor from "react-animated-cursor"


const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#C440CA',
    },
    secondary: {
      main: '#6436B2'
    },
    background: {
      default: 'black',
      paper: "#0B0E0D" //"#0B0E0D" //'#121212',
      // content bg color "#0B0E0D"
    },
    text: {
      primary: '#FAFEFB',
      secondary: '#BDC1BE'
    }
  },
  typography: {
    h6: {
      fontFamily: "museo-sans-rounded",
      fontWeight: 700,
      fontSize: ".93rem"
    },
    body1: {
      fontFamily: "museo-sans-rounded", 
    },
    body2: {
      fontFamily: "museo-sans-rounded", 
      fontSize: ".83rem"
    }
  }
});
ReactDOM.render(
  <React.StrictMode>
      <AnimatedCursor
      innerSize={10}
      outerSize={40}
      color='196, 64, 202'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.5}
    />
    <ThemeProvider theme={theme}>
    <CssBaseline />


      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
