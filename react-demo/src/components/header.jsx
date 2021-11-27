import { AppBar, Toolbar, Typography, Box, CardMedia } from '@material-ui/core';
import React from 'react'
import Image from 'material-ui-image'
import { makeStyles } from '@material-ui/styles';
import { height } from '@mui/system';
import header from './header.jpg'


const useStyles = makeStyles(() => ({
    header: {
         backgroundColor: '#0C0E0D',
        backgroundImage: {header} + "!important"
    
    },
    toolbar: {
    }

})

)


const Header = () => {
    const c = useStyles();
    return <AppBar className={c.header} position="static">
        <Toolbar className={c.toolbar}>
            {/* <Image className={classes.imageStyle} src="http://loremflickr.com/300/200"/> */}


            <CardMedia
                component="img"
                image={header}
                />

        </Toolbar>
    </AppBar>
}

export default Header;