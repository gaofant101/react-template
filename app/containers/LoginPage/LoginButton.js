import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';

const AButton = ({ className, children, formBtnLoading }) => (
    <Button
        size="large"
        type="primary"
        htmlType="submit"
        className={className}
        loading={formBtnLoading}
    >
        {children}
    </Button>
);

const LoginButton = styled(AButton)`
    width: 100%;
`;

AButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    formBtnLoading: PropTypes.bool,
};

export default LoginButton;
