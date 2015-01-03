#!/usr/bin/env node

var fs = require("fs");
var toc = require("markdown-toc");

var readme = "./README.md";
var enc = "utf8";

fs.writeFileSync(readme, toc.insert(fs.readFileSync(readme, enc)), enc);
