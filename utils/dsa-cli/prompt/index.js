const md2json = require('markdown-to-json');
let options = {
    minify: false,
    width: 200,
    outfile: null,
};
const results =  md2json.parse(['C:/github/testing/maid-cli/utils/dsa-cli/prompt/sample.md'] , options);
console.log(results);