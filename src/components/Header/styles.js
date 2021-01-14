import styled from "styled-components";

const SCHeader = styled.div`
  padding: 40px;
`;

const SCTitleWrapper = styled.div`
  text-align: center;
  img {
    width: 25px;
    height: 25px;
  }
  h1 {
    font-size: 1.5em;
    letter-spacing: 0.1em;
  }
`;

const SCInstructionsWrapper = styled.div`
  background: rgb(0 220 255 / 40%);
  padding: 5px 10px;
  p{
    font-size: 0.8rem;
    margin: 0;
    letter-spacing: 0.1em;
  }
`;

const SCVersion = styled.span`
  font-size: 0.8rem;
`;

export {
  SCHeader,
  SCTitleWrapper,
  SCInstructionsWrapper,
  SCVersion
};