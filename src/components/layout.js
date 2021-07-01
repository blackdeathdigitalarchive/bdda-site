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
			<Link to="/" className={navLinkText}>team</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/about" className={navLinkText}>resources</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/about" className={navLinkText}>blog</Link>
		    </li>
		    <li className={navLinkItem}>
			<Link to="/support" className={navLinkText}>support</Link>
		    </li>
		</ul>
	    </nav>
	    <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
