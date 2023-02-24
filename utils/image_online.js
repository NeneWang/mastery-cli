/**
 * This works!
 */

(async () => {
    const { default: terminalImage } = await import('terminal-image');
    const fetch = require('node-fetch');
    const response = await fetch('https://wngnelson.com/assets/img_src/oct/images/4804295.jpg');
    const buffer = await response.arrayBuffer();
    const image = await terminalImage.buffer(Buffer.from(buffer));
    console.log(image);
  })();
