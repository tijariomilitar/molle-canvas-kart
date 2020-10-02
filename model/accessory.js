const Accessory = function(id, posX, posY, width, height) {
	this.id = id;
	this.posX = posX;
	this.posY = posY;
	this.width = width;
	this.height = height;
	this.position = 0;
	this.vector = (function () {
		let vector = [];
		for(i=0;i<posX;i++){
			for(j=0;j<posY;j++){
				vector.push([i, j]);
			};
		};
		return vector;
	}());

	this.draw = () => {
		context.strokeStyle = 'blue';
		for(i in this.vector){
			context.strokeRect(this.vector[i][0] * width, this.vector[i][1] * height, this.width, this.height);
		};
	};

	this.verifyPosition = (key, platform) => {
		for(i in this.vector){
			for(j in platform.vector){
				if(key == 37){
					if(this.vector[i][0] <= 0){
						return;
					};
				};
				if(key == 38){
					if(this.vector[i][1] <= 0){
						return;
					};
				};
				if(key == 39){
					if(this.vector[i][0] >= platform.posX - 1){
						return;
					};
				};
				if(key == 40){
					if(this.vector[i][1] >= platform.posY - 1){
						return;
					};
				};
			};
		};

		this.move(key);
	};

	this.move = (key) => {
		for(i in this.vector){
			if(key == 37){
				this.vector[i][0] += -1;
			};
			if(key == 38){
				this.vector[i][1] += -1;
			};
			if(key == 39){
				this.vector[i][0] += 1;
			};
			if(key == 40){
				this.vector[i][1] += 1;
			};
		};
	};
};

let bolsaP = new Accessory(1, 2, 2, 40, 50);
