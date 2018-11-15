import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    & > input {
        padding: 2px 4px 3px;
        border: 1px solid #ccc;
        border-radius: 2px;
    }
    & > button {
        display: block;
        background-color: #108ee9;
        border: 1px solid #108ee9;
        padding: 4px 15px 5px;
        font-size: 14px;
        border-radius: 4px;
        outline: 0;
        cursor: pointer;
        color: #fff;
        margin-left: 10px;
    }
`;

export default Form;
