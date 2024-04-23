import logo from './logo.svg';
import './App.css';
import PokeList from './components/PokeList';

function Pokedex(pokemons,types) {
  return (
    <div className="pokedex ">
      <PokeList  pokemons={pokemons} types={types}/>
    </div>
  );
}

export default Pokedex;
