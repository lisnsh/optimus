jQuery(function(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	drawArrows(ctx);

	var ws = new WebSocket("ws://localhost:8888/websocket");

	ws.onopen = function() {
		ws.send("Hello, world");
	};
	ws.onmessage = function (evt) {
		//alert(evt.data);
		jQuery("#talkbox").val(evt.data + "\r\n");
	}

	c.addEventListener('click', function(e){   
		var p = getEventPosition(e);
		drawArrows(ctx,p);
		if (typeof(clickedPoint)!= "undefined") 
		{
			ws.send(clickedPoint);
		}
	}, false);   

}); 

function getEventPosition(ev){
	var x, y;
	if (ev.layerX || ev.layerX == 0) {
		x = ev.layerX;
		y = ev.layerY;
	}else if (ev.offsetX || ev.offsetX == 0) { // Opera
		x = ev.offsetX;
		y = ev.offsetY;
	}
	return {x: x, y: y};
}

