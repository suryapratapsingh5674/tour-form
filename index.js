function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
} 
  function test()
        {
          if (window.event.keyCode == 13)
          {
           window.event.cancelBubble = true;
           window.event.returnValue = false; 
          }
        }
  