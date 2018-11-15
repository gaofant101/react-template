import React from 'react';
import { Spin } from 'antd';

import Wrapper from './Wrapper';

const LoadingInject = () => (
    <Wrapper>
        <Spin />
    </Wrapper>
);

export default LoadingInject;
