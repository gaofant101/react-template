import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    min-height: 400px;
    text-align: center;
    padding-top: 100px;
    animation: ${fadein} 0.5s ease-in 0.5s both;
    cursor: pointer;
`;

export default Wrapper;
