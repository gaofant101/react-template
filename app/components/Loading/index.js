import React from 'react';
import { Spin } from 'antd';

import styles from './style.css';

const Loading = () => (
    <div className={styles.loading}>
        <Spin />
    </div>
);

export default Loading;
