import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">loading...</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes animate8345 {
  0%,100% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(360deg);
  }
}

.loader {
  color: rgb(0, 0, 0);
  background: linear-gradient(to right, #2d60ec, #3ccfda);
  font-size: 30px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: animate8345 9s linear infinite;
  font-weight: bold;
}
`;

export default Loader;
