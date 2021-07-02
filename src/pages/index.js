import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    heroImage,
    heroText,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from '../components/layout.module.css'

const IndexPage = () => {
    return (
	<body>
	    <header>
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
	    </header>
	    
	    <main>
		<div className={heroImage}>
		    <h1 className={heroText}>The Black Death Digital Archive</h1>
		    <p>A portal for ...</p>
		</div>
	    </main>
	    
	    <footer>
		<StaticImage
		    alt="U of SC logo"
		    src="../images/UoSC_logo1.png"
		    width={250}
		    quality={95}
		    formats={["AUTO", "WEBP", "AVIF"]}
		/>
	    </footer>
	</body>
    )
}
 
export default IndexPage
