import PokemonCard from "./PokemonCard";
import '../styles/components/PokemonList.css';

const PokemonList = ({ pokemons }) => {

  return(
    <div className="PokemonList">
      {pokemons.map(p => (
        <PokemonCard name={p.name} image={p.image} types={p.types} key={p.name}/>
      ))}
    </div>
  )
}

export default PokemonList;
