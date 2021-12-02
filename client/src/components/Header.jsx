import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Restaurant Finder</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #f36060;
  color: #ebe8e8;
  padding: 5px 0;
`;
export default Header;
