import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    margin-right: 1rem;
`;

export default ({ children }) => {
    const [value, setValue] = useState(1);

    return (
        <div>
            <Input
                type='number'
                value={value}
                onChange={e => setValue(e.target.value)}
            />

            {children(value)}
        </div>
    );
};
