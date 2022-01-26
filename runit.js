// output functions are configurable.  This one just appends some text
// to a pre element.
let outf = (text) => {
  let mypre = document.getElementById("output");
  mypre.innerHTML = mypre.innerHTML + text;
};

let builtinRead = (x) => {
  if (
    Sk.builtinFiles === undefined ||
    Sk.builtinFiles["files"][x] === undefined
  )
    throw "File not found: '" + x + "'";
  return Sk.builtinFiles["files"][x];
};

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
let runit = (idOfTextArea) => {
  let prog = document.getElementById(idOfTextArea).value;
  let mypre = document.getElementById("output");
  mypre.innerHTML = "";
  Sk.pre = "output";
  Sk.configure({ output: outf, read: builtinRead });
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = "mycanvas";
  let myPromise = Sk.misceval.asyncToPromise(function () {
    return Sk.importMainWithBody("<stdin>", false, prog, true);
  });
  myPromise.then(
    function (mod) {
      console.log("success");
    },
    function (err) {
      console.log(err.toString());
    }
  );
};

// document.querySelector('#python-example-loops-loops button').addEventListener('click',()=>{
//   runit("editor-python-loops-loops");
// })

// export {runit}
