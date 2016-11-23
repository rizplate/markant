;(function() {
	const emphasis = require("../utils/markdown_emphasis");

	const config = {
		// Configuration for CodeMirror.
		codemirror: {
			mode: {
				name: "gfm",
				allowAtxHeaderWithoutSpace: true,
			},
			lineWrapping: true,
			lineNumbers: false,
			autofocus: true,
			value: "",
			theme: "light",
			extraKeys: {
				"Ctrl-B": function(codemirror) {
					emphasis.handleEmphasis(codemirror, "**");
				},
				"Ctrl-I": function(codemirror) {
					emphasis.handleEmphasis(codemirror, "*");
				},
				"Ctrl-U": function(codemirror) {
					emphasis.handleEmphasis(codemirror, "~~");
				}
			},
		},
		// Paths to directory the editor themes can be found in.
		themeDirectory: "build/lib/codemirror/theme",
		// Give headers a bigger font-size.
		useBigHeaders: false,
	};

	module.exports = config;
}());
