import React from "react";

function PokeList(props) {
    const pokemons = props.pokemons.pokemons;
    const [screen, setScreen] = React.useState(false);
    const [selectedPokemon, setPokemon] = React.useState(null);

    const selectPokemon = (pokemon) => {
        setScreen(true);
        setPokemon(pokemon);
    };

    function calculatePercentage(value) {
        return ((value - 1) / (255 - 1)) * 100;
    }

    const renderPokeList = () => {
        return (
            <ul>
                {pokemons.map(pokemon => (
                    <li className="list-group-item" key={pokemon.id}>
                        {pokemon.name}
                        <span style={{ marginLeft: "50px" }}>
                            {pokemon.apiTypes.map(type => (
                                <span className="poke_item_type" key={type}>
                                    <img height="30px" src={type.image} alt={type.name} />
                                </span>
                            ))}
                        </span>
                        <span style={{ marginLeft: "50px" }}>
                            <button onClick={() => selectPokemon(pokemon)} className="btn btn-primary">Voir</button>
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="container">
            <div className="row"> 
                <h1 class="text-center">Pokédex</h1>
            </div>
            {!screen ? (
                <div id="list" className="row">
                    <ul className="list-group col-12">
                        {renderPokeList()}
                    </ul>
                </div>
            ) : (
                <div id='details' className="row">
                    <div className="col-10">
                        <h1>{selectedPokemon.name}</h1>
                        <div className="row">
                            <div className="col-6">
                                <img src={selectedPokemon.image} alt={selectedPokemon.name} />
                            </div>
                            <div className="col-6">
                                <h2>Statistiques</h2>
                                <div>PV :
                                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={selectedPokemon.stats.HP.toString()} aria-valuemin="0" aria-valuemax="255">
                                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: `${calculatePercentage(selectedPokemon?.stats.HP ?? 0)}%` }} aria-valuenow={selectedPokemon.stats.hp} aria-valuemin="0" aria-valuemax="255"></div>
                                        <strong>{selectedPokemon?.stats.HP}</strong>
                                    </div>
                                </div>
                                <div>ATK : 
                                <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={selectedPokemon.stats.attack.toString()} aria-valuemin="0" aria-valuemax="255">
                                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: `${calculatePercentage(selectedPokemon?.stats.attack ?? 0)}%` }} aria-valuenow={selectedPokemon.stats.hp} aria-valuemin="0" aria-valuemax="255"></div>
                                        <strong>{selectedPokemon?.stats.attack}</strong>
                                    </div>
                                </div>
                                <div>DEF : <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={selectedPokemon.stats.defense.toString()} aria-valuemin="0" aria-valuemax="255">
                                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: `${calculatePercentage(selectedPokemon?.stats.defense ?? 0)}%` }} aria-valuenow={selectedPokemon.stats.hp} aria-valuemin="0" aria-valuemax="255"></div>
                                       <strong>{selectedPokemon?.stats.defense}</strong> 
                                    </div>
                                </div>
                                <div>ATT-SPE : 
                                <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={selectedPokemon.stats.special_attack.toString()} aria-valuemin="0" aria-valuemax="255">
                                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: `${calculatePercentage(selectedPokemon?.stats.special_attack ?? 0)}%` }} aria-valuenow={selectedPokemon.stats.hp} aria-valuemin="0" aria-valuemax="255"></div>
                                       <strong>{selectedPokemon?.stats.special_attack}</strong> 
                                    </div>
                                </div>
                                <div>DEF-SPE : 
                                <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={selectedPokemon.stats.special_defense.toString()} aria-valuemin="0" aria-valuemax="255">
                                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: `${calculatePercentage(selectedPokemon?.stats.special_defense ?? 0)}%` }} aria-valuenow={selectedPokemon.stats.hp} aria-valuemin="0" aria-valuemax="255"></div>
                                        <strong>{selectedPokemon?.stats.special_defense}</strong>
                                    </div>
                                </div>
                                <div>SPD : 
                                <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={selectedPokemon.stats.speed.toString()} aria-valuemin="0" aria-valuemax="255">
                                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: `${calculatePercentage(selectedPokemon?.stats.speed ?? 0)}%` }} aria-valuenow={selectedPokemon.stats.hp} aria-valuemin="0" aria-valuemax="255"></div>
                                        <strong>{selectedPokemon?.stats.speed}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"> 
                        <button onClick={() => setScreen(false)} className="btn btn-primary">Retour</button>
                    </div>    
                </div>
            )}
        </div>
    );
}

export default PokeList;