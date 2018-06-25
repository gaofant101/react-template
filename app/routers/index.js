import {
    LoadableWelcome,
    LoadableComponentLifecycleFunction,
    LoadableComponentLifecycleStep,
    LoadableSetState,
    LoadableTopLevelApi,
    LoadableRedux,
    LoadableLoginPage,
} from './asyncs';

export const privateRoutes = [
    {
        path: '/',
        exact: true,
        component: LoadableWelcome,
    },
    {
        path: '/login',
        component: LoadableLoginPage,
    },
    {
        path: '/LifeCycle/Function',
        component: LoadableComponentLifecycleFunction,
    },
    {
        path: '/LifeCycle/Step',
        component: LoadableComponentLifecycleStep,
    },
    {
        path: '/setState',
        component: LoadableSetState,
    },
    {
        path: '/TopLevelApi',
        component: LoadableTopLevelApi,
    },
    {
        path: '/Redux',
        component: LoadableRedux,
    },
];
