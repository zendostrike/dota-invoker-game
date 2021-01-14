import styled from "styled-components";

const SCEnergySlot = styled.div`
    margin: 5px 0px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background: ${props => `url(${props.backgroundImage})`};
    background-color: #cccccc;
    background-size: cover;
    background-color: #8d8d8d;
    position: relative;
`;

export { SCEnergySlot };
