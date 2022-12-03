import React from 'react';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import PokeLogo from '/src/assets/images/logo.svg';
import getPokemons from './fetch/getPokemons';
import './styles/App.css';

function App() {

  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    getPokemons(setPokemons);
  }, [])

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <img className="App__logo" src={PokeLogo} alt="Pokedux Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App;
