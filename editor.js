let editorWrapper = (editorId) => {
  let cm = CodeMirror.fromTextArea(document.getElementById(editorId), {
    lineNumbers: true,
    mode: "python",
    theme: "base16-dark",
    autoRefresh: true,
  });

  cm.on("change", () => {
    cm.save();
  });

  return cm;
};

export { editorWrapper };

//  https://codemirror.net/doc/manual.html#events
