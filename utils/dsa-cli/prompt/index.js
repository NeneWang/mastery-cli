// const md2json = require('markdown-to-json');


// let options = {
//     minify: false,
//     width: 200,
//     outfile: null,
// };
// const results =  md2json.parse(['C:/github/testing/maid-cli/utils/dsa-cli/prompt/sample.md'] , options);
// console.log(results);



const {marked} = require('marked');
const TerminalRenderer = require('marked-terminal');

marked.setOptions({
    // Define custom renderer
    renderer: new TerminalRenderer()
  });

// Show the parsed data

console.log(marked('# Hello \n This is **markdown** printed in the `terminal`'));