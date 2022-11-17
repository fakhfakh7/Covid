import React from 'react';
import {makeStyles} from '@material-ui/core';
import ContenuDoctor from './ContenuDoctor';

const useStyles=makeStyles((theme)=>({
    root:{
        height:'100vh',
    },

}))
function Doctor() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <ContenuDoctor/>
        </div>
    )
}

export default Doctor;
