import React from 'react';

function Search(props) {
    return (
        <input type="text" onChange={props.handleChange}/>
    )
}

export default Search;