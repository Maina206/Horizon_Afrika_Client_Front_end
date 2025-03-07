import { useState } from "react";
import "../styles/searchbar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);

  const packages = [
    "Safari Adventure",
    "Mountain Trek",
    "Beach Escape",
    "City Tour",
  ];

  const handleSearch = () => {
    const results = packages.filter((pkg) =>
      pkg.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPackages(results);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Start your search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <ul className="search-results">
        {filteredPackages.length > 0
          ? filteredPackages.map((pkg, index) => <li key={index}>{pkg}</li>)
          : searchQuery && <li>No results found</li>}
      </ul>
    </div>
  );
};

export default SearchBar;
