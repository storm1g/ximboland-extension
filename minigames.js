console.log("minigames.js loaded");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "game" ) {
      var s = document.createElement('script');
      s.src = chrome.runtime.getURL('minigame.js');
      (document.head||document.documentElement).appendChild(s);
      /*s.onload = function() {
          s.parentNode.removeChild(s);
      }; */
    }
  }
);



