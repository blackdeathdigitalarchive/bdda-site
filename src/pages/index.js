import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from '../components/layout.module.css'

const IndexPage = () => {
    return (
	<main className={container}>
	    <title>The Black Death Digital Archive</title>
	    <nav>
		<ul className={navLinks}>
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
			<Link to="/about" className={navLinkText}>support</Link>
		    </li>
		</ul>
	    </nav>
	    <hr />
	    <h1>The Black Death Digital Archive</h1>
	    <p>lorem ipsum</p>
	    <hr />

	<footer>
	    <StaticImage
		alt="U of SC logo"
		src="../images/UoSC_logo1.png"
		width={250}
		quality={95}
		formats={["AUTO", "WEBP", "AVIF"]}
	/>
	</footer>
	</main>
    )
}
 
export default IndexPage
