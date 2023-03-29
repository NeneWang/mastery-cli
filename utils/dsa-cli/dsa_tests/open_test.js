const open = require('open');

(async () => {
    await open('https://www.google.com', { name: 'math', width: 400, height: 200, scrollbars: true });
})();


console.log(
    <math xmlns="http:www.w3.org/1998/Math/MathML" display="block">
        <mi>E</mi>
        <mo>=</mo>
        <mi>m</mi>
        <msup>
            <mi>c</mi>
            <mn>2</mn>
        </msup>
    </math>
)