import React, { createContext, useReducer } from 'react';

import reducer, { initialState } from './reducer';
import { noop } from 'utils';

// When new mask is added just bump values with new MSB
const MASK = 0b111;
export const LOADING_MASK = 0b001;
export const ADDING_MASK = 0b010;
export const INDICATORS_MASK = 0b100;
window.UserContextChangedBits = '000';

function calculateChangedBits(prev, next) {
    const loadingChanged =
        prev.users !== next.users ||
        prev.isLoading !== next.isLoading ||
        prev.hasLoaded !== next.hasLoaded ||
        prev.error !== next.error;

    const addingChanged = prev.isAdding !== next.isAdding;

    const indicatorsChanged =
        prev.isAdding !== next.isAdding ||
        prev.errorAdding !== next.errorAdding ||
        prev.isRemoving !== next.isRemoving ||
        prev.errorRemoving !== next.errorRemoving;

    // prettier-ignore
    const changedBits =
        (loadingChanged && LOADING_MASK) |
        (addingChanged && ADDING_MASK) |
        (indicatorsChanged && INDICATORS_MASK) &
        MASK;

    const padded = '000' + changedBits.toString('2');
    const formattedBits = padded.substr(padded.length - 3, 3);
    window.UserContextChangedBits = formattedBits;

    return changedBits;
}

export const UserStateContext = createContext({}, calculateChangedBits);
export const UserDispatchContext = createContext(noop);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

const consoleerror = console.error;
function onError(message, ...args) {
    if (/useContext\(\) second argument is reserved/.test(message)) return;

    return consoleerror(message, ...args);
}
console.error = onError;
