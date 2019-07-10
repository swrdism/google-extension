
chrome.runtime.onConnect.addListener(function(port){
	if(port.name == "typing"){
	    port.onMessage.addListener(function(msg) {
		    	alert(msg.words + "from event")
		})
	}
});
  
