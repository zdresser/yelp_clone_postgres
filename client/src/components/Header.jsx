import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader onClick={() => navigate("/")}>
      <h1>Restaurant Finder</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #f36060;
  color: #ebe8e8;
  padding: 5px 0;
  width: 100%;
  text-align: center;
`;
export default Header;
