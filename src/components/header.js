
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import Logo from "../assets/logo.js"

import { withStyles } from "@material-ui/core/styles"
import FormGroup from "@material-ui/core/FormGroup"
import * as Scroll from 'react-scroll';
import { Link , Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"

const Header = ({ siteTitle, themeMode, mode }) => {
  const IOSSwitch = withStyles(theme => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
      color: '#ccc'
    },
    switchBase: {
      padding: 1,

      "&$checked": {
        transform: "translateX(16px)",
        backgroundColor: theme.palette.common.white,

        "& + $track": {
          backgroundColor: theme.palette.common.black,
          opacity: 1,
        },
      },
      "&$checked $thumb": {
        backgroundColor: theme.palette.common.white,
      },
      "&$focusVisible $thumb": {
        backgroundColor: theme.palette.common.black,
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
      backgroundColor: theme.palette.common.black,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    )
  })

  return (
    <HeaderS>
      <H1>
        <Link to="/">
          <Logo />
        </Link>
      </H1>
      
      <LinkS to="list" spy={true} smooth={true} duration={500} offset={-200}>
        <Button>
          Pre-Order Now
        </Button>
        </LinkS>
      <FormGroup>
        <FormControlLabel
          control={
            <IOSSwitch checked={mode} onChange={themeMode} name="checkedB" />
          }
          label={mode ? `Dark` : `Light`}
        />
      </FormGroup>
      
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
  transition: all .55s ease-in-out;
  z-index: 10;
  grid-gap: 8px;
  grid-template-areas:"logo switch"
                      "order order" ;

  @media screen and (min-width: 768px){
    grid-template-areas:"logo order switch";
  }

  h1 {
    margin-bottom: 0;
  }

  .MuiTypography-body1{
    color: ${({theme}) => theme.color.negative};
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

  transition: all .55s ease-in-out;
  
`

export default Header
