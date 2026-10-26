import { useState } from 'react';

export const SelectSearch = (props) => {
    const [selected, setSelected] = useState('');

    const list = props.list || [];

    function handleChange(event) {
        const value = event.target.value;
        setSelected(value);
        if (props.onSearch) {
            props.onSearch(value);
        }
    }

    return (
        <>
            <h5>select filter</h5>
            <select value={selected} onChange={handleChange}>
                <option value=''>toutes les categories</option>
                {categories.map((category,index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </>
    );
}
