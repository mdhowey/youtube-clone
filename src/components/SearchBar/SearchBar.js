import { useState } from "react";
import "./SearchBar.css"

const SearchBar = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    onQuerySubmit(query);
  }

  return (
    <div className="container searchBar__container">
      <form onSubmit={onFormSubmit} className="search__form">
        <label htmlFor="query" className="search__form-label">Video Search</label>
        <input
          className="search__form-input"
          type="text"
          name="query"
          placeholder="What kind of videos?"
          value={query}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  )
}

export default SearchBar;