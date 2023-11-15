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

  let playerAShuffled = shuffled.slice(0, 4);
  let playerBShuffled = shuffled.slice(4, 8);

  let calculateTotalExperience = (player) =>
  player.reduce((totalExperience, pokemon) => totalExperience + pokemon.base_experience, 0);


  let playerATotalExperience = calculateTotalExperience(playerAShuffled);
  let playerBTotalExperience = calculateTotalExperience(playerBShuffled);
  console.log(playerATotalExperience);
  console.log(playerBTotalExperience);

  return (
    <div className="">
      <div className="titlePokedex">
        {playerATotalExperience > playerBTotalExperience ? (
          <h1>Player A Wins!</h1>
        ) : (
          <h1>Player B Wins!</h1>
        )}
      </div>

      <div className="container">
      
        {playerAShuffled.map((pokemon) => (
          <div key={pokemon.id} >
            <div className="">
              <img src={pokemon.pic} alt={pokemon.name} className="vert-move" />
              <p className="myElement">{pokemon.name}</p>
              {/* <p className={`type-test ${pokemon.type}`}> {pokemon.type}</p> */}
              <p>
                Base Experience: <span>{pokemon.base_experience}</span>
              </p>
            </div>
          </div>
        ))}
        <p className="textInBattle">Team Rocket</p>
        <img src="https://play.pokemonshowdown.com/sprites/trainers/teamrocket.png" className="vert-move" />
        <p className="textInBattle">Total Experience: <span> {playerATotalExperience}</span></p>
      </div>
  
        

        <h1 className="titlePokedex">VS</h1>

      
     
       
          
      <div className="container">
        {playerBShuffled.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.pic} alt={pokemon.name} className="vert-move" />
            <p className="myElement">{pokemon.name}</p>
            {/* <p className={`type-test ${pokemon.type}`}> {pokemon.type}</p> */}
            <p>
              Base Experience: <span>{pokemon.base_experience}</span>
            </p>
          </div>
        ))}

        <p className="textInBattle">Team Boang</p>
        <img src="https://play.pokemonshowdown.com/sprites/trainers/red.png" className="vert-move" />
        <p className="textInBattle">Total Experience:<span>{playerBTotalExperience} </span></p>
      </div>
    </div>
  );
}

export default { PokeCard };
