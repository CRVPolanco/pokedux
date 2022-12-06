import React from 'react';
import { Col, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemonsWithDetails, setLoading } from './actions/actions';
import PokeLogo from '/src/assets/images/logo.svg';
import './styles/App.css';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <img className="App__logo" src={PokeLogo} alt="Pokedux Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {!!loading ?
      <Col offset={12}>
        <Spin spinning size="large" />
      </Col>
      :
      <PokemonList pokemons={pokemons} />
      }
    </div>
  )
}

export default App;
