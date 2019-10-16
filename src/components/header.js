import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Switch from "react-switch";
import headerStyles from './header.module.scss';
import sun from '../../static/sun-icon.svg';
import moon from '../../static/moon-icon.svg';

const Header = ({ theme }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h2>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h2>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Switch
        onChange={() => theme.updateTheme(theme.name === "light" ? "dark" : "light")}
        checked={theme.name === "dark"}
        onColor="#222"
        offColor="#333"
        checkedIcon={<img src={moon} alt="moon icon" />}
        uncheckedIcon={<img src={sun} alt="sun icon" />}
        boxShadow="0 0 2px 3px #B38CD9"
        activeBoxShadow="0 0 2px 3px #dfb3e6"
      />
    </header>
  )
}

export default Header;