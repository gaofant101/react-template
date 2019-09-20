export const DRAWER_OPEN = 'DRAWER_OPEN';
export const DRAWER_CLOSE = 'DRAWER_CLOSE';

// 显示导航
// TODO（高凡 2019-09-19）：
export const drawerOpenAction = () => ({
    type: DRAWER_OPEN,
});

// 缩小导航
// TODO（高凡 2019-09-19）：
export const drawerCloseAction = () => ({
    type: DRAWER_CLOSE,
});
