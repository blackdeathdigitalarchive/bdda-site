module.exports = {
    plugins: [
	"gatsby-plugin-gatsby-cloud",
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
    ],
};
