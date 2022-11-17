import React from 'react';
import { makeStyles } from '@material-ui/core';
import ContenuMains from'./ContenuMains';

const useStyles=makeStyles((theme)=>({
    root:{
        height:'100vh',
    },

}))
function ConseilsMains() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <ContenuMains/>
            
        </div>
    )
}

export default ConseilsMains
