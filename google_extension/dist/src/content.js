let typing = document.getElementsByClassName("_1frb");
const port = chrome.runtime.connect({name: "typing"});

typing[0].addEventListener("input", function() {
  	console.log(typing[0].value);
		port.postMessage({words: typing[0].value});
  }, false);
