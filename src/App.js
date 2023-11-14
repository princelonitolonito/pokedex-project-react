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
      
     
      {gameStarted ? Pokecard.PokeCard():  
      <div>
        <h1 className="titlePokedex">PokeDex</h1>
        <div><button onClick={handleGameStarted}> Start Game </button></div>
      <div className="grid-container">
      
        {Pokedex.map(pokemon => (
       <div key={pokemon.id} className="grid-item"> 
         <img src={pokemon.pic} alt={pokemon.name} />
         <p className="myElement">{pokemon.name}</p>
         <p>Type: {pokemon.type}</p>
         <p>Base Experience: {pokemon.base_experience}</p>

       </div>  
     ))}

 </div>
 </div>
 };

      

 
    </div>
  );
}

export default App;
