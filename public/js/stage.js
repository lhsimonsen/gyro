var Stage = Stage || (function() {
  'use strict';

  function Stage() {
    document.body.appendChild(Gyro.canvas);
    this.setCanvasSize();
    this.ball = new Ball(Gyro.canvas.width * 0.5, Gyro.canvas.height * 0.5, 50);
    this.speed = {xv: 0, yv: 0};
  }

  Stage.prototype.handleDOMEvents = function() {
    window.addEventListener('resize', this.setCanvasSize.bind(this));
  };

  Stage.prototype.update = function() {
    // document.getElementById('xaxis').innerHTML = Gyro.beta;
    this.speed.x = Gyro.gamma;
    this.speed.y = Gyro.beta;
    this.ball.update(this.speed);
    this.render();
  };

  Stage.prototype.render = function() {
    Gyro.context.clearRect(0, 0, this.width, this.height);
    Gyro.context.save();

    this.ball.draw();

    Gyro.context.translate(this.width * 0.5, this.height * 0.5);
    Gyro.context.restore();
  };

  Stage.prototype.setCanvasSize = function() {
    this.width = Gyro.canvas.width = window.innerWidth;
    this.height = Gyro.canvas.height = window.innerHeight;
  };

  return Stage;

})();
