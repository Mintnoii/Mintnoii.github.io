module.exports = {
	extends: ["soybeanjs"],
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		indent: [2, "tab"],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
};
