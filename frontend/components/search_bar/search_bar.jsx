import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => (
    <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} color="black"/>
        <input type="text"
        placeholder="Search Events"/>
    </div>
)

export default SearchBar;