import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
	<main>
	    <title>The Black Death Digital Archive</title>
	    <nav>
		<ul>
		    <li><Link to="/about">about</Link></li>
		    <li>team</li>
		    <li>resources</li>
		    <li>blog</li>
		    <li>support</li>

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
	/>
	</footer>
	</main>
    )
}
 
export default IndexPage
