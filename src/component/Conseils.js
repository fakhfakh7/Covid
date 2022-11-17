import { makeStyles } from '@material-ui/core';
import {CssBaseline} from '@material-ui/core';
import React from 'react';
import Header from './Header';
import Doctor from './Doctor';
import ConseilsMains from'./ConseilsMains';



const useStyles=makeStyles((theme) => ({
    root:{
       minHeight:'100vh',
        backgroundImage:`url(${process.env.PUBLIC_URL+ '/images/planarriere.png'})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        


    }
}));

function Conseils() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Doctor/>
            <ConseilsMains/>
           
        </div>
    )
}

export default Conseils;
