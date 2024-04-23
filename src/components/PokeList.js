import React, { useState } from "react";

function PokeList(props) {
    const pokemons = props.pokemons.pokemons;
    const [screen, setScreen] = useState(false);
    const [selectedPokemon, setPokemon] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const selectPokemon = (pokemon) => {
        setScreen(true);
        setPokemon(pokemon);
    };

    function calculatePercentage(value) {
        return ((value - 1) / 254) * 100;
    }

    const filteredPokemons = searchTerm.length === 0 ? pokemons : pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderPokeList = () => {
        return (
            <ul>
                {filteredPokemons.map(pokemon => (
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
                <h1 className="text-center">Pokédex</h1>
            </div>
            {!screen ? (
                <div id="list" className="row">
                    <form className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Rechercher un pokémon"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </form>
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
                                {Object.entries(selectedPokemon.stats).map(([key, value]) => (
                                    key !== "HP" && <div key={key}>{key.toUpperCase()} : 
                                        <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={value.toString()} aria-valuemin="0" aria-valuemax="255">
                                            <div className="progress-bar progress-bar-striped bg-success" style={{ width: `${calculatePercentage(value ?? 0)}%` }} aria-valuenow={value} aria-valuemin="0" aria-valuemax="255"></div>
                                            <strong>{value}</strong>
                                        </div>
                                    </div>
                                ))}
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
