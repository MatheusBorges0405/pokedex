import React from 'react';

//import logo from '../images/pokebola.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    root:{
        background: 'red',
        float: 'right',
        marginTop : '20px',
        marginRight: '5px',
        color: 'white',
        hover: 'none',
    },
    grid:{
        width: '100%',
        margin:'0px',
        height:'80px',
        background:'#ff5200'
      },
      titulo:{
          color:'white',
          fontSize:'50px',
          fontFamily: "Comic Sans MS",
          float: 'right',
      },
      logo:{
        width: '70px',
        height:'70px',
        marginLeft: '20px',
        marginTop:'2px',
    }
});
export default function Header (){
const classes = useStyles();
    return(
        <div>
           <Grid container className={classes.grid}>
            {/*<header className="estruturaHeader"> */}
            
                  
               <Grid item md={7} lg={7} sm={7} xs={8}>   <img src="./images/pokebola.png" alt="some text" className={classes.logo}/> 
                <span className={classes.titulo}>POKEDEX </span> </Grid>
                 
               <Grid item md={5} lg={5} sm={5} xs={4}> <Button variant="contained"  classes={{root:classes.root}}>ABOUT</Button> </Grid>
                 
                 
            {/*</header>*/}  
            </Grid>
        </div>
    )
}