import styled from "styled-components";

const SCProgressBar = styled.div`
  width: 300px;
`;

const SCMeter = styled.div`
  height: 20px;
  position: relative;
  background: #075f6d;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);

  span {
    display: block;
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: rgb(43, 194, 83);
    background-image: linear-gradient(
      center bottom,
      rgb(43, 194, 83) 37%,
      rgb(84, 240, 84) 69%
    );
    position: relative;
    overflow: hidden;
    background-color: #fff;
  }
`;

export {
  SCProgressBar,
  SCMeter
};
