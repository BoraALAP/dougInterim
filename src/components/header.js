import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import Logo from "../assets/logo.js"

const Header = ({ siteTitle, themeMode }) => {
  
  return (
  <HeaderS>
    
      <h1>
        <Link to="/">
          <Logo />
        </Link>
        
      </h1>
      <button onClick={themeMode}>theme</button>
  </HeaderS>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderS = styled.header`
  display: grid;
  background-color: ${({ theme }) => theme.color.positive};
  box-shadow: 2px 2px 10px ${({ theme }) => theme.color.boxShadow};
  padding: 32px 5vw;
  grid-auto-flow: column;
  justify-content: space-between;
  align-content: center;
  h1{
    margin-bottom: 0;
  }
`

export default Header
