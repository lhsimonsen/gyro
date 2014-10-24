var Game = Game || (function() {
  'use strict';

  function Game() {
    this.stage = new Stage();
    this.handleDOMEvents();
    setInterval( this.loop.bind(this), 1000 / 60 );
  }

  Game.prototype.loop = function() {
    this.stage.update();
  };

  Game.prototype.handleDOMEvents = function() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
            Gyro.beta = Math.floor(event.beta);
            Gyro.gamma = Math.floor(event.gamma);
        }, true);
    }
    // } else if (window.DeviceMotionEvent) {
    //     window.addEventListener('devicemotion', function(event) {
        
    //     }, true);
    // } else {
    //     window.addEventListener('MozOrientation', function(orientation) {

    //     }, true);
    // }
  };

  return Game;

})();
