import { useState } from 'react';

export const InputSearch = ({ onSearch }) => {
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (onSearch) {
            onSearch(value.trim());
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h5>input filter</h5>
                <input
                    type="text"
                    id='input'
                    placeholder='categorie'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <button type="submit">search</button>
            </form>
        </>
    );
}
