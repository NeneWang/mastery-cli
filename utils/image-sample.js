/**
 * Simple example for Image Showing.
 */

(async () => {
    const fs = await import('fs').then((mod) => mod.promises);
    const { default: terminalImage } = await import('terminal-image');
  
    const data = await fs.readFile('unicorn.jpg');
    const image = await terminalImage.buffer(data);
    console.log(image);
  })();
  


/**
 * Gif example
 */
  (async () => {
    const fs = await import('fs').then((mod) => mod.promises);
    const { default: terminalImage } = await import('terminal-image');
  
    // const data = await fs.readFile('gif-sample-low.gif', { maximumFrameRate: 1 });
    const data = await fs.readFile('gif-sample.gif', { maximumFrameRate: 2 });
    const image = await terminalImage.gifBuffer(data);
    console.log(image);
    // image.render();
  })();
  