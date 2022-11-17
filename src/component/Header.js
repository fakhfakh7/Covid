import { Avatar, makeStyles, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Collapse } from '@material-ui/core';
import Imagecard from './Imagecard';
import Preventions from '../static/CovidProt';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        padding: '350px',

    },
    appbar: {
        background: 'none',

    },
    colorText: {
        color: '#f44336'
    },
    appbartool: {
        width: "80%",
        margin: "0 auto"
    },
    title: {
        color: '#36546e',

    },
    icon: {
        color: '#f44336',
        fontSize: "2rem",
    },
    appbarText: {
        color: '#36546e'

    },
    cardd: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }


}));

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbartool}>
                    <Avatar alt="icon" src="../../images/icon1.png" />
                    <Typography variant="h5" className={classes.appbarText} >
                        𝘾𝙊𝙑𝙄𝘿
                       <span className={classes.colorText}>-19</span>
                    </Typography>
                </Toolbar>
            </AppBar>

            <div className={classes.root}>
                <h3 className={classes.title} >
                   

                        <span className={classes.colorText}>COMMENT SE PROTÉGER? </span>
                        <h2> PRÉVENTION & CONSEILS <h6>
                            Il n'existe actuellement aucun vaccin pour prévenir la maladie à coronavirus 2019 (COVID-19).
                        <br />La meilleure façon de prévenir la maladie est d'éviter d'être exposé à ce virus.
                            <br /> Restez au courant des dernières informations sur l'épidémie de COVID-19.


                </h6>
                            <div className={classes.cardd}>
                                <Imagecard prevention={Preventions[0]}/>
                                <Imagecard prevention={Preventions[1]}/>
                                <Imagecard prevention={Preventions[2]}/>
                                <Imagecard prevention={Preventions[3]}/>

                            </div>
                            <IconButton>
                                <ExpandMoreIcon className={classes.icon} />
                            </IconButton>

                        </h2>
                        
                    </h3>

                  

                </div>
                






        </div>
    )
}

export default Header;

