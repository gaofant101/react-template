import loadable from '@loadable/component';
import LoadingInject from 'components/LoadingInject';

export default loadable(() => import('./index'), {
    LoadingComponent: LoadingInject,
});
