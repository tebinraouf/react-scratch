const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist"
	},
	// stats: 'none'
	stats: {
		/**
         *  Define logs we want.
        */
		// Add build date and time information
		builtAt: true,
		// Add children information
		children: false,
		// Got to have this
		colors: true,
		// Display the distance from the entry point for each module
		depth: false,
		// Display the entry points with the corresponding bundles
		entrypoints: true,
		// Add errors
		errors: true,
		errorDetails: true,
		// Add information about the reasons why modules are included
		reasons: true,
		// Add timing information
		timings: true,
		// Add webpack version information
		version: true,
		// Add warnings
		warnings: true
	}
});