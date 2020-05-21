import { lazy } from 'react';

export default [
    {
        navigationName: 'Local State',
        path: '/local-state',
        component: lazy(() => import('./LocalState')),
    },
    {
        navigationName: 'Context',
        path: '/context',
        component: lazy(() => import('./Context')),
    },
    {
        navigationName: 'Context with Observed Bits',
        path: '/context-with-observed-bits',
        component: lazy(() => import('./ContextWithObservedBits')),
    },
    {
        navigationName: 'Kea',
        path: '/kea',
        component: lazy(() => import('./Kea')),
    },
    {
        navigationName: 'Mobx',
        path: '/mobx',
        component: lazy(() => import('./Mobx')),
    },
    {
        navigationName: 'Recoil',
        path: '/recoil',
        component: lazy(() => import('./Recoil')),
    },
    {
        navigationName: 'Redux',
        path: '/redux',
        component: lazy(() => import('./Redux')),
    },
    {
        navigationName: 'Redux Thunk',
        path: '/redux-thunk',
        component: () => 'Redux Thunk',
    },
    {
        navigationName: 'Redux Saga',
        path: '/redux-saga',
        component: () => 'Redux Saga',
    },
    {
        navigationName: 'XState',
        path: '/xstate',
        component: () => 'Xstate',
    },
];
