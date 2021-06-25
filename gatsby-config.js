module.exports = {
    siteMetadata: {
	title: "Black Death Digital Archive"
    },
    
    plugins: [
	"gatsby-plugin-gatsby-cloud",
	"gatsby-plugin-image",
	"gatsby-plugin-sharp",
	{
	    resolve: `gatsby-source-airtable`,
	    options: {
		apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
		concurrency: 5,
		tables: [
		    {
			baseId: process.env.BDDA_BASE_ID,
			tableName: "Appellation",

		    },
		],
	    },
	},
	{
	    resolve: "gatsby-plugin-web-font-loader",
	    options: {},
	},
	{
	    resolve: "gatsby-plugin-typography",
	    options: {
		pathToConfigModule: "src/utils/typography"
	    },
	},
    ],
};
