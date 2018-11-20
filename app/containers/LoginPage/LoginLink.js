import styled from 'styled-components';

const LoginLink = styled.div`
    margin-bottom: 8px;
    & > span {
        color: rgba(0, 0, 0, 0.45);
    }
    & > span:not(:last-child) {
        margin-right: 40px;
    }
`;

export default LoginLink;
