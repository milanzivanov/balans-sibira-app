// Polyfill React as a global for Node.js CLI tools (e.g. sanity schema extract)
// that load styled-components CJS, which references React as a global variable.
global.React = require("react");
