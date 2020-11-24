"use strict";

const env = require("process").env;
const os = require("os");
const fs = require("fs");
const join = require("path").join;

const chosenWay = "envFile";

const ways = {
	"setEnv": function(variablesToPassThrough) {
		for (let varName of variablesToPassThrough) {
			let v = env[varName];
			if(v)
				console.log("::set-env name=" + varName + "::" + v);
			else
				console.log("::warning::No env var " + varName + " to pass through");
		}
	},
	"envFile": function(variablesToPassThrough) {
		const filePath = env["GITHUB_ENV"];

		let lines2append = [];
		for (let varName of variablesToPassThrough) {
			let v = env[varName];
			if(v)
				lines2append.push(varName + "=" + v);
			else
				console.log("::warning::No env var " + varName + " to pass through");
		}
		lines2append.push("");
		fs.appendFileSync(filePath, lines2append.join(os.EOL), {
			encoding: "utf8"
		});
	}
};

fs.readFile(join(__dirname, "variables2pass.txt"), "utf8", function (err, data) {
	const variablesToPassThrough = data.split(/\r?\n/g).filter(n => !!n);
	ways[chosenWay](variablesToPassThrough);
});
