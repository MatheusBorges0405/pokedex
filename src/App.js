//import Pokemon from './Pokemon';
import {React,useEffect,useState}from 'react';
import Header from './componentes/Header';
import { makeStyles } from '@material-ui/core/styles';
import api from './api' ;
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SimpleModal from './Testemodal';
import estilo from './componentes/estilo.css'

const useStyles = makeStyles((theme)=>({
  grid:{
    width: '100%',
    margin:'0px'
  },
  paper:{
    padding:theme.spacing(2),
    textAlign: 'center',
    //color: theme.pallete.text.secondary,
    //background: theme.pallete.sucess.light,
  },
  img:{
    width:'100px',
  }
}))



function App() {


const classes = useStyles();

  

  const [pokemons,setPokemons] = useState([]);
 // const [carac,setCarac] = useState([]);



  useEffect(()=>{
    pegaPokemon();
  },[])
  
  function pegaPokemon (){
   api.get('pokemon').then((response)=>{
      if(response){
        setPokemons(response.data.results);
        console.log(response.data.results);
      }
    })
  }
  /*
function pegaCarac (nome){
  api.get(`pokemon/${nome}`).then((response)=>{
    if(response){
    setCarac(response.data);
    console.log(response.data);
    }
  })
}

*/

  return (
    <div >
      <Header/ >

      <Grid container spacing={2} className={classes.grid}>
        {pokemons.map((pokemon,index)=>(
        <Grid item key ={index} lg={3} md={4} sm={6} xs={12}>
          <Paper className={classes.paper}>
            <div key={index}>
              <h1 >{pokemon.name}</h1>
              <img src = {`./images/${pokemon.name}.svg`} className={classes.img}/>
        {/*<button onClick={()=> pegaCarac(pokemon.name)}>Detalhes</button>*/}
               <SimpleModal nome={pokemon.name} id={index} />
            </div>
          </Paper>
        </Grid>
        )
      )}
      </Grid>
    </div>
  );
      }

export default App;
