import './App.css'

import Pokedex from '../../assets/images/Pokedex.png';

import { useEffect, useState } from 'react'
import axios from 'axios';

import Pokemons from '../../components/card';

function App() {

  const [characters, setCharacters] = useState([{}]);
  const [searchMore, setSearchMore] = useState(false);
  const [end, setEnd] = useState(false);

  async function getCharacters() {
    let url = `https://pokeapi.co/api/v2/pokemon/`;

    let response = await axios.get(url);
    setCharacters(response.data.results);
  }

  useEffect(() => {

  }, [characters])


  const alterSearchMoreAndEnd = () => {
    setEnd(true);
    setSearchMore(true);
  }

  useEffect(() => {
  }, [searchMore, end])

  return (
    <>
      <div className='App'>
        <header>
          <img src={Pokedex} />
          <button onClick={() => getCharacters(false)}>Encontrar Pokémons</button>
        </header>
        <div className='container-pokemons'>
          <div>

            {
              characters.length > 1 ? (
                characters.map((e, index) => {
                  if (searchMore){ 
                    return  <Pokemons name={e.name} index={index + 1} key={index} />
                  }
                    
                  return index < 10 ? <Pokemons name={e.name} index={index + 1} key={index} />
                    : null
                })
              ) : null}
          </div>
          {characters.length < 2 || end ?
            null
            : <button onClick={() => alterSearchMoreAndEnd()}>Buscar mais</button>
          }

        </div>
      </div>
    </>
  )
}

export default App
