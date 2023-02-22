(async () => {
    const terminalImage = await import('terminal-image');
    console.log(await terminalImage.file('unicorn.jpg'));
  })();
  