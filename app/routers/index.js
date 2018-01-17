import {
  LoadableWelcome,
  LoadableComponentLifecycleFunction,
  LoadableComponentLifecycleStep,
  LoadableSetState,
  LoadableTopLevelApi,
  LoadableRedux,
} from './asyncs';


const routes = [
    {
        path: '/',
        exact: true,
        component: LoadableWelcome,
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

export default routes;
