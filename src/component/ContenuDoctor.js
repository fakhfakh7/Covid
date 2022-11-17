import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    img: {
        height: 770,
        width: 570,
        
        


    },
    root:{
        justifyContent: 'left',
        alignItems: 'left',

        

    },
    contenu:{

        fontSize:"1rem",
       
       fontFamily:"Nunito",
       color:"#263238",
        paddingLeft:"60px",
        marginTop:'30px',
        lineHeight:"1.5rem",
        
    },
    titre:{
        fontSize:"1.5rem",
        fontWeight:"bold",
        fontFamily:"Nunito",
        color:"#f44336",

    },
    colorText: {
        color: '#1e88e5',
        fontWeight:"bold",
    },
    icon:{
        paddingleft:"5px",
        
       

        
        
    }

}))

function ContenuDoctor() {
    const classes = useStyles();
  

    return (
       
        
       <div>
           <Grid container spacing={3}>
              <Grid item xs={12} sm={6} >
           
           <Typography gutterBottom variant="h5" align="center" component="h5" className={classes.titre}>
           Prendre des mesures pour protéger les autres
                        
          </Typography>
                    <Typography variant="h4" align="left" component="p" className={classes.contenu}  display='block'>
                    <CheckCircleIcon style={{ color: green[500] }} className={classes.icon} fontSize="small"/> <span className={classes.colorText}>&nbsp;Restez à la maison si vous êtes malade -</span> Restez à la maison si vous êtes malade, sauf &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pour obtenir des soins médicaux.
<p/><CheckCircleIcon style={{ color: green[500] }} className={classes.icon} fontSize="small"/> <span className={classes.colorText}>&nbsp;Couvrez-vous la bouche et le nez -</span> avec un mouchoir lorsque vous toussez ou éternuez &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(jetez les mouchoirs usagés à la poubelle) ou utilisez l'intérieur de votre coude.
<p/><CheckCircleIcon style={{ color: green[500] }} className={classes.icon} fontSize="small"/> <span className={classes.colorText}>&nbsp;Portez un masque facial si vous êtes malade -</span> Vous devez porter un masque facial &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lorsque vous êtes avec d’autres personnes (par exemple, si vous partagez une chambre ou &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;un véhicule) et avant d’entrer chez un professionnel de la santé.
<p/><CheckCircleIcon style={{ color: green[500] }} className={classes.icon} fontSize="small" /> <span className={classes.colorText}>&nbsp;Nettoyer ET désinfecter quotidiennement les surfaces fréquemment touchées -</span> Cela &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comprend les téléphones, les tables, les interrupteurs, les poignées de porte, les &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comptoirs, les poignées, les bureaux, les toilettes, les robinets et les éviers.
<p/><CheckCircleIcon style={{ color: green[500] }} className={classes.icon} fontSize="small"/> <span className={classes.colorText}>&nbsp;Nettoyez les surfaces sales -</span>Utilisez un détergent ou du savon et de l'eau avant la &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;désinfection.
<p/><CheckCircleIcon style={{ color: green[500] }} className={classes.icon} fontSize="small"/> <span className={classes.colorText}>&nbsp;Restez informé de la situation locale du COVID-19 -</span> Obtenez des informations à jour &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sur l'activité locale du COVID-19 auprès des responsables de la santé publique.
<p/><CheckCircleIcon style={{ color: green[500] }} className={classes.icon} fontSize="small" /> <span className={classes.colorText}>&nbsp;Poubelle doublée et dédiée -</span> Si possible, dédiez une poubelle doublée à la personne &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;malade. Utilisez des gants pour retirer les sacs à ordures et pour manipuler et éliminer les &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ordures.
                       
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
              
          <Avatar variant="square" alt="imagesk" src="../../images/steps.png" className={classes.img} />
          </Grid>
          </Grid>
       </div>
        
      

    )
}

export default ContenuDoctor
