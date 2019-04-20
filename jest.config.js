module.exports = {
	testRegex: "/src/.*?(Spec)\\.js$",
	modulePathIgnorePatterns: ["node_modules", "dist"],
	moduleNameMapper: {
		"\\.(css|less)$": "identity-obj-proxy"
	}
};