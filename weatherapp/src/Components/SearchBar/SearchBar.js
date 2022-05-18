import React from "react";

function SearchBar( {placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="Search City"></input>
            </div>
        </div>
    )
    
}
export default SearchBar