import Index from '@containers/Index/Loadable';
import Help from '@containers/Help';
import Login from '@containers/Login';
1
export const privateRoutes = [
    {
        path: '/',
        exact: true,
        component: Index,
    },
    {
        path: '/help',
        component: Help,
    },
];

export const publicRoutes = [
    {
        path: '/login',
        component: Login,
    },
];
