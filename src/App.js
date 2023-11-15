import Pokedex from "./Pokedex";
import './App.css';
import Pokecard from "./Pokecard";
import { useState } from "react";


function App() {

  const [gameStarted, setGameStarted] = useState(false);
 

  const handleGameStarted = () =>{
    setGameStarted(true);
  }

  return (
    <div className="App">
      
     
      {gameStarted ? 
      <div className="page-transition"> 
     

      {Pokecard.PokeCard()}


      </div>
      :  
      <div>
        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" className="imgPokedex"/>
        <div className="titlePokedex"><button onClick={handleGameStarted} className="playGame"> Start Game </button></div>
      <div className="grid-container">
      
        {Pokedex.map(pokemon => (
          
       <div key={pokemon.id} className= "grid-item"> 
       
         <img src={pokemon.pic} alt={pokemon.name} />
         <p className="myElement">{pokemon.name}</p>
         <p className={`type-test ${pokemon.type}`}> {pokemon.type}</p>
         <p>Base Experience: <span>{pokemon.base_experience}</span></p>

       </div>  
      
     ))}

 </div>
 </div>
 };

      

 
    </div>
  );
}

export default App;
