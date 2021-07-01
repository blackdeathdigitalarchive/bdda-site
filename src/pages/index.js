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
			    <Link to="/about" className={navLinkText}>about</Link>
			</li>
			<li className={navLinkItem}>
			    <Link to="/" className={navLinkText}>team</Link>
			</li>
			<li className={navLinkItem}>
			    <Link to="/" className={navLinkText}>resources</Link>
			</li>
			<li className={navLinkItem}>
			    <Link to="/" className={navLinkText}>blog</Link>
			</li>
			<li className={navLinkItem}>
			    <Link to="/support" className={navLinkText}>support</Link>
			</li>
		    </ul>
		</nav>
	    </header>
	    
	    <main>
		<div className={heroImage}>
		<h1 className={heroText}>The Black Death Digital Archive</h1>
		<p>Our understanding of the Black Death, the plague pandemic that
		    ravaged Europe, the Middle East, and north Africa between 1346 and
		    1353, has been transformed in the past 15 years due to new
		    developments in genetics. An evolutionary history of the causative
		    organism of plague, <i>Yersinia pestis</i>, allows us now to track
		    plague’s movements across vast landscapes and demonstrate the
		    connected stories linking outbreaks from China to Spain to
		    sub-Saharan Africa. Just as the geographical footprint of the Second
		    Plague Pandemic has grown, so, too, has its chronological scope. We
		    can now demonstrate that a sustained proliferation of strains
		    of <i>Y. pestis</i> started in the late 12th or early 13th century,
		    and lasted up to the 19th century. Researching such a vast
		    phenomenon demands the combined labors of scientists and
		    historians.
		</p>

		<p>This project serves as a portal for researchers from all
		    disciplinary backgrounds, allowing them to find the best
		    methodological work with links to biological, archaelogical, and
		    documentary databases.
		</p>
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
