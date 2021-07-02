import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
    return (
	<main className={container}>
	    <title>{pageTitle}</title>
	    <nav>
		<ul className={navLinks}>
		    <li className={navLinkItem}>
			<Link to="/" className={navLinkText}>home</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/about" className={navLinkText}>about</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/team" className={navLinkText}>team</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/support" className={navLinkText}>sponsors &amp; partners</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/database" className={navLinkText}>BDDA database</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/resources" className={navLinkText}>resources</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/blog" className={navLinkText}>blog</Link>
		    </li>
		</ul>
	    </nav>
	    <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
