const { createCanvas } = require('canvas');
window.HTMLCanvasElement.prototype.getContext = function (type) {
  return createCanvas(0, 0).getContext(type);
};
