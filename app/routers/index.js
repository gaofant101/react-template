import Welcome from '@containers/Welcome/Loadable';
import ComponentLifecycleFunction from '@containers/ComponentLifecycle/Function/Loadable';
import ComponentLifecycleStep from '@containers/ComponentLifecycle/Step/Loadable';
import SetState from '@containers/SetState/Loadable';
import TopLevelApi from '@containers/TopLevelApi/Loadable';
import Redux from '@containers/Redux/Loadable';
import LoginPage from '@containers/LoginPage/Loadable';
import Context from '@containers/Context/Loadable';
import ErrorBoundary from '@containers/ErrorBoundary/Loadable';

export const privateRoutes = [
    {
        path: '/',
        exact: true,
        component: Welcome,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/lifecycle/function',
        component: ComponentLifecycleFunction,
    },
    {
        path: '/lifecycle/step',
        component: ComponentLifecycleStep,
    },
    {
        path: '/setstate',
        component: SetState,
    },
    {
        path: '/toplevelapi',
        component: TopLevelApi,
    },
    {
        path: '/redux',
        component: Redux,
    },
    {
        path: '/context',
        component: Context,
    },
    {
        path: '/error-boundary',
        component: ErrorBoundary,
    },
];
