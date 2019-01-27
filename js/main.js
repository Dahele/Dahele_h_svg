(function () {
	"use strict";
	console.log("file connected");

	var iconSet = document.querySelectorAll(".icons");
	console.log(iconSet);

	function logloaded(evt) {	
		var targetSVG = evt.currentTarget.contentDocument;
	}
	function logClicked(evt){
		console.log(evt.currentTarget.id);
	}
	for(var i=0; i<iconSet.length; i++){
		iconSet[i].addEventListener("load",logloaded,false);
	}
})();

