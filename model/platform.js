const Platform = function(id, posX, posY, width, height) {
	this.id = id;
	this.posX = posX;
	this.posY = posY;
	this.width = width;
	this.height = height;
	this.position = (function () {
		let vector = [];
		for(i=0;i<posX;i++){
			for(j=0;j<posY;j++){
				vector.push([i, j, 0]);
			};
		};
		return vector;
	}());
	this.draw = () => {
		context.strokeStyle = 'red';
		for(i in this.position){
			context.strokeRect(this.position[i][0] * width, this.position[i][1] * height, this.width, this.height);
		};
	};
};

let plate_carrier = new Platform(1, 6, 5, 40, 50);