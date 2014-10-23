var Stage = Stage || (function() {
  'use strict';

  function Stage() {
    document.body.appendChild(Gyro.canvas);
    this.setCanvasSize();
    this.ball = new Ball(Gyro.canvas.width * 0.5, Gyro.canvas.height * 0.5);
    this.speed = {xv: 0, yv: 0};
  }

  Stage.prototype.handleDOMEvents = function() {
    window.addEventListener('resize', this.setCanvasSize.bind(this));
  };

  Stage.prototype.update = function() {
    // document.getElementById('xaxis').innerHTML = Gyro.beta;
    this.speed.xv = Gyro.gamma;
    this.speed.yv = Gyro.beta;
    this.ball.update(this.speed);
    this.render();
  };

  Stage.prototype.render = function() {
    Gyro.context.clearRect(0, 0, this.width, this.height);
    Gyro.context.save();

    Gyro.context.fillStyle = "#ff00ff";
    Gyro.context.fillRect(this.ball.x, this.ball.y, 50, 50);

    Gyro.context.translate(this.width * 0.5, this.height * 0.5);
    Gyro.context.restore();
  };

  Stage.prototype.setCanvasSize = function() {
    this.width = Gyro.canvas.width = window.innerWidth;
    this.height = Gyro.canvas.height = window.innerHeight;
  };

  return Stage;

})();