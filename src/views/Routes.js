import { lazy } from 'react';

import LocalState from './LocalState';

export default [
    {
        navigationName: 'Context',
        path: '/context',
        component: lazy(() => import('./Context')),
    },
    {
        navigationName: 'Context Undocumented',
        path: '/context-undocumented',
        component: lazy(() => import('./ContextUndocumented')),
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
        navigationName: 'Local State',
        path: '/*',
        component: LocalState,
    },
];
