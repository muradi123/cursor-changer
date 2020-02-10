
    function setCursor(url) {
        $('body').css('cursor', `url(${url}) 1 1, auto`);
      }
      
      chrome.storage.local.get('key', result => {
        setCursor(result.key);
      });
      
      chrome.storage.onChanged.addListener(changes => {
        if (changes.key) {
          setCursor(changes.key.newValue);
        }
      });      
            
          
      