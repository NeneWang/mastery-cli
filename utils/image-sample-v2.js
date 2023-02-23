(async () => {
    const fs = await import('fs').then((mod) => mod.promises);
    const { default: terminalImage } = await import('terminal-image');
  
    const data = await fs.readFile('unicorn.jpg');
    const image = await terminalImage.buffer(data,  {width: '50%', preserveAspectRatio: true});
    console.log(image);
  })();
  