var fs = require("fs");
var file = "page.html";
var content = fs.readFileSync(file, {
	encoding: "utf8"
});
var data = {
	file: file,
	content: content
};
fs.writeFileSync("page.json", JSON.stringify(content));