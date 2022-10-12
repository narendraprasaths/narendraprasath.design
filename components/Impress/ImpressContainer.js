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

  .hint, .mobile-hint {
    display: none;
  }
`;

export default ImpressContainer;