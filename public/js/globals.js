var Gyro = Gyro || (function() {
  'use strict';

  var Gyro = {};
  Gyro.canvas = document.createElement('canvas');
  Gyro.context = Gyro.canvas.getContext('2d');
  Gyro.beta = 0;
  Gyro.gamma = 0;

  return Gyro;
}());
