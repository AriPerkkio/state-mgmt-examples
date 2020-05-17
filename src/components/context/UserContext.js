import React, { createContext, useReducer } from 'react';

import reducer, { initialState } from './reducer';
import { noop } from 'utils';

export const UserStateContext = createContext({});
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
