
chrome.runtime.onMessage.addListener(function({message}, sender, sendResponse) {
    if(message === "startChangeCursor"){
        chrome.storage.local.get(['key'], function(result) {
            $("body").css('cursor', `url(${result.key}) 1 1, auto`);
          });
       }
  });

 