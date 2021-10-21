function toggle(buttonShowId,buttonHideId,codeId){
  const viewSelection = document.getElementById(buttonShowId);
  viewSelection.addEventListener("click", function showItem() {
  let main = document.getElementById(codeId);
  main.classList.remove("toggleDisplayNone");
  viewSelection.classList.add("toggleDisplayNone");
  hideSelection.classList.remove("toggleDisplayNone");
                    });

  const hideSelection = document.getElementById(buttonHideId);
  hideSelection.addEventListener("click", function hideItem() {
  let main = document.getElementById(codeId);
  viewSelection.classList.remove("toggleDisplayNone");
  main.classList.add("toggleDisplayNone");
  hideSelection.classList.add("toggleDisplayNone");
                });
}

export {toggle}
