import React from 'react';
import './search.style.css'

export const SearchCmp=({placeholderTxt,handleChange})=>(
<input className="search" type="search" placeholder={placeholderTxt} onChange={handleChange} />
);