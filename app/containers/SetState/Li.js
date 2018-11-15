import styled from 'styled-components';

const Spacing = styled.li`
    color: ${(props) => (props.selected ? '#f00' : '')};
    cursor: pointer;
`;

export default Spacing;
