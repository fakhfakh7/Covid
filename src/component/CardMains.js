import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 230,
        background:'none',
        margin:'10px',
        maxHeight:350,
        

    },
    media: {
        height: 200,

    },
    large: {
        width: 230,
        height: 200,
    },
    titel:{
       fontSize:"0.9rem",
       fontWeight:"bold",
       fontFamily:"Nunito",
       color:"#1e88e5"

        
    },
    titell:{
        fontSize:"0.80rem",
       
       fontFamily:"Nunito",
       color:"#263238"
       

    }
}))

function CardMains( {main}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <Avatar alt='img1' src={main.imgsrc} className={classes.large} />


            <CardContent className={classes.root}>
                <Typography gutterBottom variant="h6" component="h6" className={classes.titel}>
                    {main.titre}
      </Typography>
                
            </CardContent>
        </CardActionArea>
    </Card>
    
    )
}

export default CardMains
