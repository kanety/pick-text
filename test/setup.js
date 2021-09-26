let clipboardText;
Object.assign(navigator, {
  clipboard: {
    writeText: (text) => { clipboardText = text; },
    readText: () => { return clipboardText;  },
  },
});
