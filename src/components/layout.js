import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';
import { ThemeContext } from "./ThemeContext";
import styled from "@emotion/styled"

const themes = {
  light: {
    foreground: "inherit",
    background: "inherit",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

const ThemedLayout = styled.div`
  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
  transition: all 0.4s ease;
  min-height: 100vh;

  & a {
    color: ${props => (props.theme.name === "dark" ? "#B38CD9" : "inherit")};
  }
`

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return(
    <ThemeContext.Consumer>
      {theme => (
        <ThemedLayout theme={theme}>
          <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
              <Header theme={theme}/>
              {children}
            </div>
            <Footer />
          </div>
        </ThemedLayout>
      )}
  </ThemeContext.Consumer>

  )
}

export default Layout;