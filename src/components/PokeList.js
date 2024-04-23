import React from "react";
import pokemons from "../data_pokemons";

function PokeList(props) {
    const pokemons = props.pokemons.pokemons;
    const [screen, setScreen] = React.useState(false);
    const [selectedPokemon, setPokemon] = React.useState(null);

    const selectPokemon = (pokemon) => {
        setScreen(true);
        setPokemon(pokemon);
    }

    const renderPokeList = () => {
        return (
            <ul>
                {pokemons.map(pokemon => {
                    const list_types = pokemon.apiTypes;
                    return (
                        <li className="list-group-item" key={pokemon.id}>
                            {pokemon.name}
                            <span style={{ marginLeft: "50px" }}>
                                {list_types.map(type => (
                                    <span className="poke_item_type" key={type}>
                                        <img height="30px" src={type.image} alt={type.name} />
                                    </span>
                                ))}
                            </span>
                            <span style={{ marginLeft: "50px" }}>
                                <button onClick={() => selectPokemon(pokemon)} className="btn btn-primary">Voir</button>
                            </span>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Pokedex</h1>
                </div>
            </div>
            {!screen ? (
                <div id="list" className="row">
                    <ul className="list-group col-12">
                        {renderPokeList()}
                    </ul>
                </div>
            ) : (
                <div id='details' className="row">
                    <div className="col-12">
                        <h1>{selectedPokemon?.name}</h1>
                        <div className="row">
                            <div className="col-6">
                                <img src={selectedPokemon?.image} alt={selectedPokemon?.name} />
                            </div>
                            <div className="col-6">
                                <h2>Statistiques</h2>
                                <div>PV : {selectedPokemon?.stats.HP}</div>
                                <div>ATK : {selectedPokemon?.stats.attack}</div>
                                <div>DEF : {selectedPokemon?.stats.defense}</div>
                                <div>ATT-SPE : {selectedPokemon?.stats.special_attack}</div>
                                <div>DEF-SPE : {selectedPokemon?.stats.special_defense}</div>
                                <div>SPD : {selectedPokemon?.stats.speed}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PokeList;
