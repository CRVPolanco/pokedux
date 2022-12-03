import PokemonCard from "./PokemonCard";
import '../styles/components/PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return(
    <div className="PokemonList">
      {pokemons.map(p => (
        <PokemonCard />
      ))}
    </div>
  )
}
PokemonList.defaultProps = {
  pokemons: Array(20).fill(''),
}

export default PokemonList;
