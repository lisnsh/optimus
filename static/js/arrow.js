function drawArrows(context,p){
	var a = [[300,250,180],[450,400,90],[600,250,0],[450,100,270]];
	for(var i=0;i<a.length;i++){
		var arrow = new Arrow();
		arrow.x = a[i][0];
		arrow.y = a[i][1];
		arrow.rotation = a[i][2]*Math.PI/180;
		arrow.index = i;

		arrow.draw(context,p);
	}
}


function drawArrowOutline(context){
	context.beginPath();
	context.moveTo(-50,-25);
	context.lineTo(0,-25);
	context.lineTo(0,-50);
	context.lineTo(50,0);
	context.lineTo(0,50);
	context.lineTo(0,25);
	context.lineTo(-50,25);
	context.lineTo(-50,-25);
	context.closePath();
	context.stroke();
}

function Arrow(){
	this.x=0;
	this.y=0;
	this.color="F8F8FF";
	this.rotation=0;
	this.index = 0;
}

Arrow.prototype.draw=function(context,p){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.lineWidth=6;
	context.fillStyle=this.color;
	
	drawArrowOutline(context);
	
	context.fillStyle="green";
	context.fill();
	context.restore();

	if(typeof(p) != "undefined" && context.isPointInPath(p.x,p.y)){
		context.fillStyle="red";
		context.fill();
		clickedPoint = this.index;
	}
};


