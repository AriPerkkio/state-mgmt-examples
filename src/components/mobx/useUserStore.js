import { useContext } from 'react';

import UserStoreContext from './UserStoreContext';

export const useUserStore = () => useContext(UserStoreContext);
