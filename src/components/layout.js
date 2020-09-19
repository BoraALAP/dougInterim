/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/global"
import { primaryTheme, secondaryTheme } from "../styles/theme"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [mode, setMode] = useState(true)

  const handleMode = () => {
    setMode(!mode)
  }

  return (
    <>
      <ThemeProvider theme={mode ? primaryTheme : secondaryTheme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} themeMode={handleMode} mode={mode}/>

        <Container>{children}</Container>

        <Footer>
          <p>
            © {new Date().getFullYear()}, Built by{" "}
            <a href="https://artticfox.com" target="_blank"
                rel="noreferrer">Artticfox</a>
          </p>
        </Footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled.main`
  display: grid;
  padding: ${({ theme }) => theme.pagePadding};
  justify-content:center;
  transition: all .55s ease-in-out;
  background-color: ${({ theme }) => theme.color.bg};
`

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.positive};
  font-size: 12px;
  display: grid;
  justify-content: end;
  padding: 16px 32px;
  grid-auto-flow: column;
  transition: all .55s ease-in-out;
  margin-top: 32px;
  p {
    margin-bottom: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.color.lightGrey};
  }
  a{
    color: ${({ theme }) => theme.color.positive};
  }
`

export default Layout
