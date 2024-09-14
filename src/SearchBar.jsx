import React, { useState } from 'react'
import './SearchBar.css';
const SearchBar = ({onSearch,input,setInput}) => {
  const handleInputValue = (e)=>{
    const inputValue = e.target.value;
    setInput(inputValue);
    onSearch(inputValue);
  }
  return (
    <>
      <div className="searchDiv">
        <input 
        type="text"
        name="CountrySearch"
        value={input}
        onChange={handleInputValue}
        placeholder='Search by Country or Capital...'
        className='input'
        />
      </div>
    </>
  )
}

export default SearchBar;