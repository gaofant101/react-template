export const menu = [
    {
        index: '0',
        key: '/',
        icon: 'smile',
        title: '首页',
        children: [
            {
                index: '0-0',
                key: '/',
                icon: 'bars',
                title: 'Welcome',
            },
        ],
    },
    {
        index: '1',
        key: '/lifecycle',
        icon: 'loading',
        title: '生命周期',
        children: [
            {
                index: '1-0',
                key: '/lifecycle/function',
                icon: 'bars',
                title: 'LifeCycle',
            },
            {
                index: '1-1',
                key: '/lifecycle/step',
                icon: 'bars',
                title: 'Step',
            },
        ],
    },
    {
        index: '2',
        key: '/setState',
        icon: 'frown-o',
        title: 'React.setState',
        children: [
            {
                index: '2-0',
                key: '/setState',
                icon: 'bars',
                title: 'setState',
            },
        ],
    },
    {
        index: '3',
        key: '/toplevelapi',
        icon: 'setting',
        title: 'TopLevelApi',
        children: [
            {
                index: '3-0',
                key: '/toplevelapi',
                icon: 'bars',
                title: 'TopLevelApi',
            },
        ],
    },
    {
        index: '4',
        key: '/redux',
        icon: 'tool',
        title: 'Redux',
        children: [
            {
                index: '4-0',
                key: '/redux',
                icon: 'bars',
                title: 'Redux',
            },
        ],
    },
    {
        index: '5',
        key: '/context',
        icon: 'fork',
        title: 'Context',
        children: [
            {
                index: '5-0',
                key: '/context',
                icon: 'bars',
                title: 'Context',
            },
        ],
    },
    {
        index: '6',
        key: '/error-boundary',
        icon: 'warning',
        title: 'ErrorBoundary',
        children: [
            {
                index: '6-0',
                key: '/error-boundary',
                icon: 'bars',
                title: 'ErrorBoundary',
            },
        ],
    },
];
