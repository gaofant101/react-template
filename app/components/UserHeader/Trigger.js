import styled from 'styled-components';

const UserInfo = styled.span`
    font-size: 18px;
    line-height: 64px;
    padding: 0 12px;
    cursor: pointer;
    transition: color 0.3s;
    & : hover {
        color: #1890ff;
    }
`;

export default UserInfo;
