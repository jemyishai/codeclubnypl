let editorWrapper = (editorId) =>{
  return CodeMirror.fromTextArea(document.getElementById(editorId), {
    lineNumbers: true,
    mode: "python",
    theme: "base16-dark",
    autoRefresh: true,
    });
}


export {editorWrapper}
