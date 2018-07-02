import {
    LoadableWelcome,
    LoadableComponentLifecycleFunction,
    LoadableComponentLifecycleStep,
    LoadableSetState,
    LoadableTopLevelApi,
    LoadableRedux,
    LoadableLoginPage,
    LoadableContext,
    LoadableErrorBoundary,
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
        path: '/lifecycle/function',
        component: LoadableComponentLifecycleFunction,
    },
    {
        path: '/lifecycle/step',
        component: LoadableComponentLifecycleStep,
    },
    {
        path: '/setstate',
        component: LoadableSetState,
    },
    {
        path: '/toplevelapi',
        component: LoadableTopLevelApi,
    },
    {
        path: '/redux',
        component: LoadableRedux,
    },
    {
        path: '/context',
        component: LoadableContext,
    },
    {
        path: '/error-boundary',
        component: LoadableErrorBoundary,
    },
];
