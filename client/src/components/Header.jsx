import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <h1>Restaurant Finder</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  color: blue;
`
export default Header;