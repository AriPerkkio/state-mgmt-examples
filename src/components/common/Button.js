import React from 'react';
import styled from 'styled-components';

import { colorWhite, colorGrey } from 'constants/style-variables';

export default styled.button`
    cursor: pointer;
    color: ${colorWhite};
    background-color: rgba(20, 100, 150, 1);
    border: 0;
    outline: 0;
    border-radius: 1rem;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 0 1rem black;
    margin: 2rem 1rem;

    & + & {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }

    &:last-child {
        margin-right: 0;
    }

    &[disabled] {
        text-decoration: line-through;
        color: ${colorGrey};
    }
`;

const Grid = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 50rem;

    list-style: none;

    li {
        flex: 1 1 auto;
        padding: 0 0.5rem;
    }

    button {
        width: 100%;
        margin: 0.5rem;
        border-radius: 1rem;
        box-shadow: 0 0.1rem 0.5rem black;
    }
`;

export function ButtonGrid({ children }) {
    return (
        <Grid>
            {React.Children.toArray(children).map((child, index) => (
                <li key={index}>{child}</li>
            ))}
        </Grid>
    );
}
