import React, { useReducer, useCallback, createContext } from 'react';

export const CodeBlockContext = createContext();

const RESET = 'RESET';

const reducer = (state, next) => {
    if (next === RESET) {
        return [];
    }

    if (state.indexOf(next) === -1) {
        return [...state, next];
    }

    return state.filter(s => s !== next);
};

const CodeBlockProvider = ({ children }) => {
    const [codes, toggleCodes] = useReducer(reducer, []);
    const resetCodes = useCallback(() => toggleCodes(RESET), []);

    return (
        <CodeBlockContext.Provider value={{ codes, toggleCodes, resetCodes }}>
            {children}
        </CodeBlockContext.Provider>
    );
};

export default CodeBlockProvider;
