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
        key: '/LifeCycle',
        icon: 'loading',
        title: '生命周期',
        children: [
            {
                index: '1-0',
                key: '/LifeCycle/Function',
                icon: 'bars',
                title: 'LifeCycle',
            },
            {
                index: '1-1',
                key: '/LifeCycle/Step',
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
        key: '/TopLevelApi',
        icon: 'setting',
        title: 'TopLevelApi',
        children: [
            {
                index: '3-0',
                key: '/TopLevelApi',
                icon: 'bars',
                title: 'TopLevelApi',
            },
        ],
    },
    {
        index: '4',
        key: '/Redux',
        icon: 'setting',
        title: 'Redux',
        children: [
            {
                index: '4-0',
                key: '/Redux',
                icon: 'bars',
                title: 'Redux',
            },
        ],
    },
];
