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
    navLinkText,
    footerLogo
    
} from '../components/layout.module.css'

const IndexPage = () => {
    return (
	<body>
	    <main>
		<div className={heroImage}>
		    <h1 className={heroText}>The Black Death Digital Archive</h1>
		    <p>BDDA is a multidisciplinary portal for researching the <a href="https://en.wikipedia.org/wiki/Second_plague_pandemic">Second Plague Pandemic</a>.</p>
			    
		    <p>The enormous body of evidence to reconstruct the pandemic has so far not been systematically compiled. This is the first scholarly initiative that aims to assemble all extant evidence (published and unpublished) on the pandemic and serve as a gateway for future research. This project collects different types of data—both documentary (archival, narrative) and material (bio-archeological, palaeogenomic) evidence—and assesses the evidence with the expertise of scholars working on different aspects of plague. As an open-access site, the BDDA portal will serve scholars, educators, students, and the wider public.</p>

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
		</div>
	    </main>
	    
	    <footer>
		<StaticImage className={footerLogo}
		    alt="University of South Carolina logo"
		    src="../images/UoSC_logo1.png"
		    width={250}
		    quality={95}
		    formats={["AUTO", "WEBP", "AVIF"]}
		/>
		<StaticImage className={footerLogo}
		    alt="SSHRC"
		    src="../images/sshrc.png"
		    width={250}
		    quality={95}
		    formats={["AUTO", "WEBP", "AVIF"]}
		/>

		<StaticImage className={footerLogo}
		    alt="SSHRC"
		    src="../images/mcmaster.png"
		    width={250}
		    quality={95}
		    formats={["AUTO", "WEBP", "AVIF"]}
		/>
		<StaticImage className={footerLogo}
		    alt="SSHRC"
		    src="../images/villanova.png"
		    height={45}
		    quality={95}
		    formats={["AUTO", "WEBP", "AVIF"]}
		/>
	    </footer>
	</body>
    )
}
 
export default IndexPage
