import React, { useState,  } from "react";
// import ReactDOM from 'react-dom';
// import CharacterList from './CharacterList';


export default function SearchForm(props) {

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchResults(event.target.value)
    return handleChange
  }

const handleSubmit = event => {
  event.preventDefault()


const characterSearch = props.character.filter(char => {
    return char.name.toLowerCase().indexOf(searchResults.toLowerCase()) !== -1;
  });
  props.search(characterSearch)
  console.log(characterSearch)

}

  return (

    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input
        onChange={handleChange}
        type='text'
        name='character'
        id='character'
        placeholder='search'
        />
        <input type="submit" value="Submit" />
    </form>
    </section>
  );
}
