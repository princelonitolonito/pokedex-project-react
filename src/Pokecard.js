import Pokedex from "./Pokedex";

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
  }

 
function PokeCard() {
    
    let shuffled = shuffleDeck(Pokedex);
    
    let playerAShuffled = [shuffled[0],shuffled[1],shuffled[2],shuffled[3]];
    let playerBShuffled = [shuffled[4],shuffled[5],shuffled[6],shuffled[7]];

    let playerATotalExperience = [playerAShuffled[0].base_experience + playerAShuffled[1].base_experience + playerAShuffled[2].base_experience + playerAShuffled[3].base_experience];
    let playerBTotalExperience = [playerBShuffled[0].base_experience + playerBShuffled[1].base_experience + playerBShuffled[2].base_experience + playerBShuffled[3].base_experience];
    console.log(playerATotalExperience)
    console.log(playerBTotalExperience)


    return(
        <div className="">
            <div className="titlePokedex">
            {playerATotalExperience > playerBTotalExperience ? 

            <h1>Player A Wins!</h1>
            : 
            <h1>Player B Wins!</h1>
        }

        </div>
            
        <div className="grid-container">
             {playerAShuffled.map(pokemon => (
            <div key={pokemon.id} className={`grid-item`}>

              <div className="">  

            <img src={pokemon.pic} alt={pokemon.name} className="vert-move"/>
            <p className="myElement">{pokemon.name}</p>
            <p className={`type-test ${pokemon.type}`}> {pokemon.type}</p>
            <p>Base Experience:  <span>{pokemon.base_experience}</span></p>
            
            </div>  
    
            </div>
          
      ))}
         

         
      
        </div>
        <div className="">
        <b className="titlePokedex">Player A Experience: {playerATotalExperience}</b>
                
                <h1 className="titlePokedex">VS</h1>
               
        <b className="titlePokedex">Player B Experience: {playerBTotalExperience}</b>
        </div>
        <div className="grid-container">
        
                {playerBShuffled.map(pokemon => (
            <div key={pokemon.id} className="grid-item" > 
            <img src={pokemon.pic} alt={pokemon.name} className="vert-move"/>
            <p className="myElement">{pokemon.name}</p>
            <p className={`type-test ${pokemon.type}`}> {pokemon.type}</p>
            <p>Base Experience:  <span>{pokemon.base_experience}</span></p>

                </div>  

   
          
      ))}

                </div>
                
        </div>
    );
}

export default { PokeCard };
