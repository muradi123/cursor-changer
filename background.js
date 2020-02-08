chrome.runtime.onMessage.addListener(
  function({message, img}, sender, sendResponse) {
   
    if (message === "changeCursor"){
     
      chrome.tabs.query({}, function(tabs) {
        for (let i=0; i<tabs.length; ++i) {
          let imgSrc = img;
          chrome.storage.local.set({key: imgSrc}, function() {
            console.log('Value is set to ' + imgSrc);
          });
            chrome.tabs.sendMessage(tabs[i].id,{message: "startChangeCursor"} );
            
           }
       });

     
     }
     
  });