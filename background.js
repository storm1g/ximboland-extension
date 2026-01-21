chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message && message.type === 'setBroj') {
    chrome.storage.local.set({broj: Number(message.broj) || 0}, function() {
      sendResponse({ok: true});
    });
    return true; // indicate async response
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.storage.local.get(['broj'], function(result) {
      var broj = Number(result.broj) || 0;
      if (broj > 0) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
          if (!tabs || !tabs[0]) return;
          chrome.tabs.sendMessage(tabs[0].id, {message: 'fight'}, function(response) {
            var newBroj = Math.max(0, broj - 1);
            chrome.storage.local.set({broj: newBroj});
          });
        });
      }
    });
  }
});
