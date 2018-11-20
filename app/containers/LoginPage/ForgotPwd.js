import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = ({ className, children, ahref }) => (
    <a href={ahref} className={className}>
        {children}
    </a>
);

const ForgotPwd = styled(Link)`
    float: right;
`;

Link.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    ahref: PropTypes.string,
};

export default ForgotPwd;
