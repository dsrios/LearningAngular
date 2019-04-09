/**
Lavalamp
@class Lavalamp
@constructor
*/
var Lavalamp = function(assets) {

  /* Self-reference */
  var self = this;

  /* 
  * Targets
  */
  this.canvas = document.getElementById('lavalamp');
  this.tmp = document.createElement('canvas');
  this.tmpCtx = this.tmp.getContext('2d');

  /*
  * Settings
  */
  this.minSize = 0.2;
  this.maxSize = 0.4;
  this.ballCount = 5;

  /* Velocity is assigned randomly up to these numbers (p.setup)  */
  this.velocityX = 1.2;
  this.velocityY = 1.2;
  /*
  * Resolution
  * Multiplys canvas pixels before rendering 
  * Eg, 2 = window height/width x 2
  */
  this.res = 2;

  /*
  * Metaball Color stops
  * Hue, Saturation, Lightness, Alpha
  */
  this.colorStop1 = 'hsla(328, 100%, 53%, 1)';
  this.colorStop2 = 'hsla(313, 100%, 55%, 0)';

  /* Private */
  this.points = [];
  this.i = 0;

  this.sketch();
  this.requestAnimFrame();

  /* Return this. Returning itself allows its methods to be chained */
  return this;
};

/*
* requestAnimFrame polyfill
*/
Lavalamp.prototype.requestAnimFrame = function() {
  window.requestAnimFrame = (function(fps){
    // if (fps) return 1000 / 60;
    // else
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  /*
  * Count Fps
  */
  window.countFPS = (function () {
    var lastLoop = (new Date()).getMilliseconds();
    var count = 1;
    var fps = 0;

    return function () {
      var currentLoop = (new Date()).getMilliseconds();
      if (lastLoop > currentLoop) {
        fps = count;
        count = 1;
      } else {
        count += 1;
      }
      lastLoop = currentLoop;
      return fps;
    };
  }());

  (function loop() {
      requestAnimationFrame(function () {
        var fps = document.getElementById("fps");
        // $('#fps').html("FPS: " + countFPS());
        fps.innerHTML = "FPS: " + countFPS();
        loop();
      });
  }());
  return this;
};

/*
* Create canvas and initialise canvas
* Dependancies: Processing.js
*/
Lavalamp.prototype.sketch = function() {
  
  var self = this;

  var res = self.res,
      tmp = self.tmp,
      points = self.points,
      ballCount = self.ballCount,
      velocityX = self.velocityX,
      velocityY = self.velocityY,
      minSize = self.minSize,
      maxSize = self.maxSize,
      tmpCtx = self.tmpCtx,
      colorStop1 = self.colorStop1,
      colorStop2 = self.colorStop2;

  new Processing(self.canvas, function(p){

    function addPoint(x,y,r){

      var radgrad = tmpCtx.createRadialGradient(
        x, y, 0,
        x, y, r
      );

      radgrad.addColorStop(0,colorStop1);
      radgrad.addColorStop(1,colorStop2);

      tmpCtx.beginPath();
      tmpCtx.fillStyle = radgrad;
      tmpCtx.arc(x, y, r, 0, Math.PI*2);
      tmpCtx.fill();
    }

    /*
    * Window resize function
    */
    window.addEventListener('resize', function(){
      p.setup(); // this is obsolete, but used it locally
    });

    /*
    * Setup processing.js canvas
    */
    p.setup = function () {

      /* Size of processing.js canvas */
      p.size(document.body.clientWidth*res, document.body.clientHeight*res);

      /* Pre-render to same dimensions  */
      tmp.width = p.width*res;
      tmp.height = p.height*res;

      /*
       *  Push start points to canvas
       */
      if(points.length===0){
        for (var i = ballCount; i >= 0; i--){
          points.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vel: new p.PVector(p.random(velocityX*res), p.random(velocityY*res)),
            size: p.random(document.body.clientWidth*minSize*res, document.body.clientWidth*maxSize*res),
            update: function() {
              this.x += this.vel.x;
              this.y += this.vel.y;
              if(this.x > p.width || this.x < 0) { this.vel.x *= -1; }
              if(this.y > p.height || this.y < 0) { this.vel.y *= -1; }
            }
          });
        }

        p.rafDraw();

      }

      /* Processing canvas */
      // p.background('white');

    };

  function animLoop( callback, fps ){
    window.setTimeout(callback, fps);
  }

    p.rafDraw = function () {
      p.externals.context.clearRect(0,0,p.width, p.height);
      self.tmpCtx.clearRect(0,0,self.tmp.width,self.tmp.height);
      var points = self.points;
      for (i = points.length - 1; i >= 0; i--){
        addPoint(points[i].x, points[i].y, points[i].size);
        points[i].update();
      }
      var imageData = tmpCtx.getImageData(0,0,p.width,p.height);
      var pixels = imageData.data;
      var pixelsLength = pixels.length;
      for (i=0; i < pixelsLength; i+=4) {
        if(pixels[i+3]< 200) {
          pixels[i+3] = 0;
        }
      }
      p.externals.context.putImageData(imageData, 0, 0);

      /* Redraw frames via loop */
      // window.requestAnimFrame(p.rafDraw);
      // animLoop(p.rafDraw, 10);
      window.setTimeout(p.rafDraw, 10);

    };

  });
  return this;
};

var lavalamp = new Lavalamp();