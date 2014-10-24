var Stage = Stage || (function() {
  'use strict';

  function Stage() {
    document.body.appendChild(Gyro.canvas);
    this.setCanvasSize();
    this.ball = new Ball(Gyro.canvas.width * 0.5, Gyro.canvas.height * 0.5, 10);
    this.speed = {};
  }

  Stage.prototype.handleDOMEvents = function() {
    window.addEventListener('resize', this.setCanvasSize.bind(this));
  };

  Stage.prototype.update = function() {
    this.speed.x = Gyro.gamma;
    this.speed.y = Gyro.beta;
    this.ball.update(this.speed);
    this.render();
  };

  Stage.prototype.render = function() {
    Gyro.context.fillStyle = 'rgba(0,0,0,0.05)';
    Gyro.context.fillRect(0, 0, Gyro.canvas.width, Gyro.canvas.height);
    this.ball.draw();
  };

  Stage.prototype.setCanvasSize = function() {
    Gyro.canvas.width = window.innerWidth;
    Gyro.canvas.height = window.innerHeight;
  };

  return Stage;

})();
