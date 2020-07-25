import React from 'react';
import './SearchBox.css';
const SearchBox = ( { searchChange } ) => {
    return(
        <input 
        className='xd'
        type='text' 
        placeholder='Search'
        onChange={ searchChange }
        />
    );
}

export default SearchBox;