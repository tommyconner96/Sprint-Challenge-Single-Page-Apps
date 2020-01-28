import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [filteredData, updatedData] = useState([])

  const search = listcharacters => {
    updatedData(listcharacters)
  }


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(resp => {
      setCharacters(resp.data.results)
      updatedData(resp.data.results)
      console.log(resp.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <section className="character-list">
      <Link className='link' to={'/'}>Home</Link>
      <SearchForm search={search} character={characters}/>
{filteredData.map(char => {
  return (
        <CharacterCard
        key={char.id}
        name={char.name}
        species={char.species}
        gender={char.gender}
        />
  )
})}
    </section>
  );
}
