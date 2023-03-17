// a simple TeX-input example
var mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

var yourMath = 'E = mc^2';

mjAPI.typeset({
  math: yourMath,
  format: "TeX", // or "inline-TeX", "MathML"
  mml:true,      // or svg:true, or html:true
}, function (data) {
  if (!data.errors) {console.log(data.mml)}
  // will produce:
  // <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  //   <mi>E</mi>
  //   <mo>=</mo>
  //   <mi>m</mi>
  //   <msup>
  //     <mi>c</mi>
  //     <mn>2</mn>
  //   </msup>
  // </math>
});