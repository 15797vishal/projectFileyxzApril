import React, { useState } from 'react'
import "./style.css" 
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Search({search,onSearchChange}) { 
  // const [search,setSearch]=useState("");
//  {search,onSearchChange}
  return (
    <div className='searchflex'>
    <SearchRoundedIcon />
    <input  
    placeholder='search'
    type='text'
    value={search}
    onChange={(e)=> onSearchChange(e)}
    />
    </div>
  )
}

export default Search