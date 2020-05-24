import { atom } from 'recoil';

import { initialState } from './reducer';

export const key = 'Users';

const UserState = atom({
    key,
    default: initialState,
});

export default UserState;
