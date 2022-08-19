const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleNameMapper: {
		// Handle module aliases (this will be automatically configured for you soon)
		"^@/components/(.*)$": "<rootDir>/components/$1",

		"^@/pages/(.*)$": "<rootDir>/pages/$1",
		"^@/lib/(.*)$": "<rootDir>/lib/$1",
		"react-markdown":
			"<rootDir>/node_modules/react-markdown/react-markdown.min.js",
		"react-syntax-highlighter":
			"<rootDir>/node_modules/react-syntax-highlighter/dist/cjs/index.js",
		yaml: "<rootDir>/node_modules/yaml/dist/index.js",
	},
	testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
