var Game = Game || (function() {
  'use strict';

  function Game() {
    this.stage = new Stage();
    this.handleDOMEvents();
    this.loop();
  }

  Game.prototype.loop = function() {
    requestAnimationFrame(this.loop.bind(this));
    this.stage.update();
  };

  Game.prototype.handleDOMEvents = function() {
    Gyro.canvas.addEventListener(
      'mousemove', this.handleMousemove.bind(this, true));
    Gyro.canvas.addEventListener(
      'mouseleave', this.handleMousemove.bind(this, false));

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
            Gyro.beta = Math.floor(event.beta);
            Gyro.gamma = Math.floor(event.gamma);
        }, true);
    } else if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', function(event) {
        
        }, true);
    } else {
        window.addEventListener('MozOrientation', function(orientation) {

        }, true);
    }
  };

  Game.prototype.handleMousemove = function(event) {};

  return Game;

})();
