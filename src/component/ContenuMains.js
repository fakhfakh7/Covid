import React from 'react';
import { makeStyles } from '@material-ui/core';
import CardMains from './CardMains';
import Mains from '../static/MainsProt';

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        padding: '300px',
    },
    title: {
        color: '#36546e',

    },
    colorText: {
        color: '#f44336'

    },
    carde: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '100px',
        //backgroundColor:'red'
       

    },
    soustitle: {
        color: '#1e88e5',
        fontWeight: "bold",

    }

}))

function ContenuMains() {
    const classes = useStyles();


    return (
        <div className={classes.root} >
            <h2 className={classes.title} >


                <span className={classes.colorText}>PROTÈGE TOI</span>
                <h5>
                    La meilleure chose que vous puissiez faire maintenant est de planifier comment vous pouvez adapter
                    <br />votre routine quotidienne. Prenez quelques mesures pour vous protéger comme Nettoyez vos mains
                    <br />souvent, Évitez tout contact étroit, Couvrez la toux et les éternuements, nettoyez les surfaces utilisées
                    <br />quotidiennement, etc. La meilleure façon de prévenir la maladie est d'éviter d'être exposé à ce virus.

                </h5>
                <h2 className={classes.soustitle}>
                    Suivez les étapes pour vous laver les mains

                </h2>
                <div>
                <div className={classes.carde} >
                    <CardMains main={Mains[0]}/>
                    <CardMains main={Mains[1]}/>
                    <CardMains main={Mains[2]}/>
                    <CardMains main={Mains[3]}/>
                    <CardMains main={Mains[4]}/>
                    <CardMains main={Mains[5]} />
                </div>

                </div>
            </h2>
        </div>


    )
}

export default ContenuMains
