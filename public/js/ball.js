var Ball = Ball || (function() {
	'use strict'

	function Ball(x ,y) {
		this.x = x;
		this.y = y;
	}

	Ball.prototype.update = function(speed) {
		this.speed = speed;
		this.x = this.x + (this.speed.xv);
		this.y = this.y + (this.speed.yv);
	}

	return Ball;
})();