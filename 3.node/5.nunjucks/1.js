let nunjucks = require("nunjucks");
nunjucks.configure({ autoescape: true });
let ret = nunjucks.renderString("hello {{username}}", { username: "zpxe" });
console.log(ret);
