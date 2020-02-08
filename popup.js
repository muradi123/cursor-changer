
   $(document).ready(function() {

      let  icons =  document.getElementsByClassName('icon');

      for( let icon of icons){
       icon.addEventListener('click',function(){
           let imgSrc = icon.src;
           chrome.runtime.sendMessage({message: "changeCursor", img: imgSrc});
           
      })
   } 
  })


