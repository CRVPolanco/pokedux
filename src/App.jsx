import React from 'react';
import { Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import getPokemons from './fetch/getPokemons';
import { setPokemons } from './actions/actions';
import PokeLogo from '/src/assets/images/logo.svg';
import './styles/App.css';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getPokemons(dispatch);
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
