var path = Qva.Remote + "?public=only&type=Document&name=Extensions/locate/";
var first = 0;
var dorp = 0;
var posLat, posLon;
Qva.AddDocumentExtension('locate', function() {
	var _this = this;

	function sF(position) {
		var mydoc = Qv.GetCurrentDocument();
		posLat = position.coords.latitude;
		posLon = position.coords.longitude;
		mydoc.SetVariable("vLat", posLat);
		mydoc.SetVariable("vLong", posLon);
	}

	function eF(error) {
		alert("Please ensure you are using a compatible browser. Error: " + error.message);
	}

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(sF, eF);
	} else {
		error('not supported');
	}

});
