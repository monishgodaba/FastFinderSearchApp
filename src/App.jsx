import React, { useState } from 'react';
import data from "./data.json";
import SearchBar from './SearchBar';
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [input, setInput] = useState('');
  const handleSearch = (input) => {
    if (input) {
      const results = data.filter((country) =>
        country.country.toLowerCase().includes(input.toLowerCase()) ||
        country.capital.toLowerCase().includes(input.toLowerCase())
      );
      setResult(results);
      setSelectedCountry(null); 
    } else {
      setResult([]);
      setSelectedCountry(null); 
    }
    setInput(input); 
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country); 
    setInput(''); 
    setResult([]); 
  };

  return (
    <div className="App">
      <p className="heading">Fast Finder Search Bar</p>
      <SearchBar onSearch={handleSearch} input={input} setInput={setInput} />
      <div className="searchResults">
        <ul>
          {result.map((country) => (
            <li 
              key={country.country}
              onClick={() => handleCountryClick(country)}
            >
              {country.country} - {country.capital}
            </li>
          ))}
        </ul>
      </div>
      {selectedCountry && (
        <div className="countryDetails">
          <h2 className="heading1"> Details</h2>
          <div className='new'>
          <strong>Country</strong> 
          <span>:</span>
          <p>{selectedCountry.country}</p>
          </div>
          <div className='new'>
          <strong>Capital</strong> 
          <span>:</span>
          <p>{selectedCountry.capital}</p>
          </div>
          <div className='new'>
          <strong>Population</strong> 
          <span>:</span>
          <p>{selectedCountry.population}</p>
          </div>
          <div className='new'>
          <strong>Language</strong> 
          <span>:</span>
          <p>{Array.isArray(selectedCountry.official_language) ? 
                selectedCountry.official_language.join(', ') : 
                selectedCountry.official_language}</p>
          </div>
          <div className='new'>
          <strong>Currency</strong> 
          <span>:</span>
          <p>{selectedCountry.currency}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;