module.exports = {
	// ...
	// Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
	src: "./src/",
	language: "typescript",
	schema: "./_schemas/schema.graphql",
	exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
};
