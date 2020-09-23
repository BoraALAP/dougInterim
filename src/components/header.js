import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import Logo from "../assets/logo.js"

import { Link, animateScroll as scroll } from "react-scroll"

const Header = ({ siteTitle, themeMode, mode }) => {
  return (
    <HeaderS>
      <H1>
        <Link to="/">
          <Logo />
        </Link>
      </H1>

      <LinkS to="list" spy={true} smooth={true} duration={500} offset={-200}>
        <Button>Pre-Order Now</Button>
      </LinkS>

      <ButtonSimple checked={mode} onClick={themeMode}>
        {mode ? `Dark` : `Light`} Mode
      </ButtonSimple>
    </HeaderS>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderS = styled.header`
  display: grid;
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.color.bg};
  box-shadow: 2px 2px 10px ${({ theme }) => theme.color.boxShadow};
  padding: 32px 5vw;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.55s ease-in-out;
  z-index: 10;
  grid-gap: 8px;
  grid-template-areas:
    "logo switch"
    "order order";

  @media screen and (min-width: 768px) {
    grid-template-areas: "logo order switch";
  }

  h1 {
    margin-bottom: 0;
  }

  .MuiTypography-body1 {
    color: ${({ theme }) => theme.color.negative};
  }
`

const H1 = styled.h1`
  display: grid;
  grid-area: logo;
`

const LinkS = styled(Link)`
  display: grid;
  grid-area: order;
`

const Button = styled.button`
  color: ${({ theme }) => theme.color.positive};
  background-color: ${({ theme }) => theme.color.negative};

  transition: all 0.55s ease-in-out;
`

const ButtonSimple = styled.button`
  color: ${({ theme }) => theme.color.negative};
  border: none;
  box-shadow: none;
  background-color: transparent;
`

export default Header
