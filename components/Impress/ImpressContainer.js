import styled from "styled-components";

const ImpressContainer = styled.div`
  .step {
    opacity: 0.1;
  }

  .active {
    opacity: 1;
    transition: opacity 1s;
    -webkit-transition: opacity 1s;
  }

  .mobile-hint {
    position: absolute;
    left: 20px;
    bottom: 75px;
    display: flex;
    align-items: center;
    font-family: Gilroy-Regular, sans-serif;
  }
`;

export default ImpressContainer;
