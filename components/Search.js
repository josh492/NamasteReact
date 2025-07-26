
import { useState } from "react";

const Search = (props) => {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        props.setSearchText(e.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for restaurants..."
                className="search-input border border-gray-300 p-2 rounded"
                value={searchText}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Search;
