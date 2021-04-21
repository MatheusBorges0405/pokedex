import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useState}from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import api from './api' ;
import Button from '@material-ui/core/Button';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: 'white',
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '25px',
    
  },
  modal:{
    textAlign:'center',
  },
  img:{
      
      height:'100px',
  },
  textoModal:{
      fontSize:'20px',
      fontFamily: "Comic Sans MS",
      color:'black',
  }
}));

export default function SimpleModal({ nome,index }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  


  const [carac,setCarac] = useState([]);

  function pegaCarac (){
     api.get(`pokemon/${nome}`).then((response)=>{
      if(response){
        setCarac(response.data);
        console.log(response.data);
        handleOpen();
      }
    })
  }
  
    
  
  return (
    <div>
      <Button variant="contained" color="primary" type="button" onClick={pegaCarac}>
        Detalhes
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Grid container>
             <Grid item lg={12} sm={12} md={12} xs={12} className={classes.modal}>
                <h2 className={classes.textoModal}  id="simple-modal-title"> {nome}</h2>
                <img className={classes.img} src = {`./images/${nome}.svg`}  />
              </Grid>
              <Grid item lg={6} sm={6} md={6} xs={6} className={classes.modal} >
                <p className={classes.textoModal}>
                altura: {carac.height} m
                </p>
              </Grid>
              <Grid item lg={6} sm={6} md={6} xs={6} className={classes.modal} >
                <p className={classes.textoModal}>peso: {carac.weight} kg</p>
              </Grid>
              <Grid item lg={12} sm={12} md={12} xs={12} className={classes.modal} >
                <p className={classes.textoModal}>tipos:</p>
              </Grid>
              {
                carac && carac.types && carac.types.map((type, index) => (
                  <Grid key={index}item lg={6} sm={6} md={6} xs={6} className={classes.modal} >
                    <p className={classes.textoModal} key={index}>{type.type.name}</p>
                  </Grid>
                ))
              }
              <Grid item lg={12} sm={12} md={12} xs={12} className={classes.modal} >
                <p className={classes.textoModal}>Habilidades:</p>
              </Grid>
              {
                carac && carac.abilities && carac.abilities.map((abilities,index)=>(
                <Grid key={index}item lg={6} sm={6} md={6} xs={6} className={classes.modal} >
                  <p className={classes.textoModal} key={index}>{abilities.ability.name}</p>
                </Grid> 
                ))
              }
            </Grid>
        </div>
      </Modal>
    </div>
  );
}