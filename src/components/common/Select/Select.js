import React, { useState } from 'react';
import styled from 'styled-components';

import { colorWhite } from 'constants/style-variables';

const Label = styled.label`
    color: ${colorWhite};
    margin: 0.5rem 1rem;
    display: inline-block;
    font-size: 1.85rem;
`;

const Select = ({ label, options, children }) => {
    const [value, setValue] = useState(options[0]);

    return (
        <div>
            <Label htmlFor={label} className='common-label'>
                {label}
            </Label>

            <select
                id={label}
                value={value}
                onChange={e => setValue(e.target.value)}>
                {options.map(opt => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>

            <div>{children(value)}</div>
        </div>
    );
};

export default Select;
