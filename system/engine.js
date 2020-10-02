const ENGINESTATE = {
	status: 'playing',
	system: {
		exe: () => {
			if(ENGINESTATE.status=='playing'){
					
			};
			// if(ENGINESTATE.status=='paused'){

			// };
			// if(ENGINESTATE.status=='over'){

			// };
		},
		render: () => {
			if(ENGINESTATE.status=='playing'){
				Platform.controller.render();
				Accessory.controller.render();
			};
			// if(ENGINESTATE.status=='paused'){

			// };
			// if(ENGINESTATE.status=='over'){

			// };
		}
	}
};

const ENGINE = {
	loop: () => {
		animation = requestAnimationFrame(ENGINE.loop);
		ENGINE.update();
		ENGINE.render();
		// cancelAnimationFrame(animation);
	},
	update: () => {
		ENGINESTATE.system.exe();
	},
	render: () => {
		CANVAS.draw();
		ENGINESTATE.system.render();
	}
};

ENGINE.loop();