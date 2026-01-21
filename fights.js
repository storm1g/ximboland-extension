console.log("fights.js loaded");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "fight") {
        console.log("fight!");
      var s = document.createElement('script');
      s.src = chrome.runtime.getURL('fight.js');
      (document.head||document.documentElement).appendChild(s);
      /*s.onload = function() {
          s.parentNode.removeChild(s);
      }; */
    }
  }
);