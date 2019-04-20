module.exports = {
	testRegex: "/src/.*?(Spec)\\.js$",
	modulePathIgnorePatterns: ["node_modules", "dist"],
	moduleNameMapper: {
		"\\.(css|less)$": "identity-obj-proxy",
		"\\.(jpeg|png|gif|jpg)": "<rootDir>/src/utils/fileMock.js"
	},
	"automock": false,
	"setupFiles": [
		"<rootDir>/src/utils/setupJest.js"
	]
};