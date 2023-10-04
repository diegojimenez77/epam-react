import React from 'react';
import { useRef } from 'react';

function SearchBar() {
    const textTitle = useRef();
    const submit = (e) => {
        e.preventDefault();
        const title = textTitle.current.value;
        alert(`${title}`);
        textTitle.current.value = '';
    };
    return(
        <form onSubmit={submit}>
            <input
                ref={textTitle}
                type='text'
                placeholder='Enter course name or id' />
            <button>Search</button>
        </form>
    );
}

export default SearchBar;