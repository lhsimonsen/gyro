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

		this.getDirection('x');
		this.getDirection('y');
		this.getVelocity('x');
		this.getVelocity('y');
		this.wrap('x', 'width');
		this.wrap('y', 'height');
	};

	Ball.prototype.getDirection = function(direction) {
		if(this.velocity[direction] > this.axis[direction])
			this.velocity[direction]--;
		if(this.velocity[direction] < this.axis[direction])
			this.velocity[direction]++;
	}

	Ball.prototype.getVelocity = function(direction) {
		this.velocity[direction] *= this.friction;
		this[direction] += this.velocity[direction];
	}

	Ball.prototype.wrap = function(direction, axis) {
		if(this[direction] - (this.radius * 0.5) > Gyro.canvas[axis])
			this[direction] = -this.radius;
		else if(this[direction] + (this.radius * 0.5) <= 0)
			this[direction] = Gyro.canvas[axis] + this.radius;
	}

	Ball.prototype.draw = function() {
		Gyro.context.beginPath();
    	Gyro.context.fillStyle = "#fff";
    	Gyro.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    	Gyro.context.fill();
	}

	return Ball;
})();