var Ball = Ball || (function() {
	'use strict'

	function Ball(x ,y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.velocity = {x: 0, y: 0}
		this.friction = 0.98;
	}

	Ball.prototype.update = function(axis) {
		this.axis = axis;

		if(this.velocity.y > this.axis.y)
			this.velocity.y--;
		if(this.velocity.y < this.axis.y)
			this.velocity.y++;
		if(this.velocity.x > this.axis.x)
			this.velocity.x--;
		if(this.velocity.x < this.axis.x)
			this.velocity.x++;

		this.velocity.y *= this.friction;
		this.y += this.velocity.y;
		this.velocity.x *= this.friction;
		this.x += this.velocity.x;

		if(this.x > (Gyro.canvas.width - 50))
			this.x = Gyro.canvas.width - 50;
		else if(this.x <= 50)
			this.x = 50;

		if(this.y > (Gyro.canvas.height - 50))
			this.y = Gyro.canvas.height - 50;
		else if(this.y <= 50)
			this.y = 50;
	};

	Ball.prototype.draw = function() {
		Gyro.context.beginPath();
    	Gyro.context.fillStyle = "#fff";
    	Gyro.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    	// Gyro.context.closePath();
    	Gyro.context.fill();
	}

	return Ball;
})();