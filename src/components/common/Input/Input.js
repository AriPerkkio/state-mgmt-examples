import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin-right: 1rem;
    &[disabled] {
        text-decoration: line-through;
    }
`;

export default function Input({ children, disabled, ...props }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        !disabled && setValue('');
    }, [disabled]);

    return (
        <div>
            <StyledInput
                type='text'
                disabled={disabled}
                value={value}
                onChange={e => setValue(e.target.value)}
                {...props}
            />

            {children(value)}
        </div>
    );
}
