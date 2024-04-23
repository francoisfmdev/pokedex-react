import React from "react";
import pokemons from "../data_pokemons";

 function PokeList(props) {
    const pokemons = props.pokemons.pokemons;
    const [screen,setScreen] = React.useState(false);
    const [pokemon,setPokemon] = React.useState(null);
   
    const selectedPokemon = (pokemon) => {
        setScreen(true);
        setPokemon(pokemon);
    }

    const renderPokeList = () => {
        // Assurez-vous de retourner le résultat du map
        return (
          <ul>
            {pokemons.map(pokemon => {
              const list_types = pokemon.apiTypes;
              return (
                <li className="list-group-item" key={pokemon.id}>
                  {pokemon.name}
                  <span style={{marginLeft: "50px"}}>
                  {list_types.map(type => (
                    <span className="poke_item_type" key={type}> {/* Ajoutez une clé unique pour chaque élément de la liste */}
                      <img  height="30px" src={type.image} alt={type} /> {/* Assurez-vous que les attributs src et alt sont correctement définis */}
                    </span>
                  ))}
                  </span>
                  <span style={{marginLeft: "50px"}}>
                      <button onClick={(pokemon)=>selectedPokemon(pokemon)} class="btn btn-primary">voir</button>
                  </span>
                </li>
              );
            })}
          </ul>
        );
      }

    return (
        <div className="container">
            
          <div className="row">
             <div className="col-12">
             <h1 className="text-center">Pokedex</h1>
             </div>
             
          </div>
          {!screen ?(
          <div id="list" className="row">  
              <div>

              </div>
              <ul className="list-group col-12">
               {renderPokeList()}
              </ul>
          </div>
          ):(
          <div id='details' className="row">  
             <div className="col-12">
             </div> 
          </div>
          )}
        </div>
    );
}

export default PokeList;