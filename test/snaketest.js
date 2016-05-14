var assert = require('assert');
var Snake = require('../public/js/Snake.js');

describe('Snake', function() {
  describe('#ctor', function () {
    it('should create a valid object', function () {
      var snake = new Snake.Snake();
      var point = new Snake.Point(50,500);
      snake.points.push({X:50,Y:600});
      snake.SetOrigin(point);
      console.log(snake.points);
      assert.equal(50, snake.points[0].X);
    });
  });
  describe('#draw', function () {
  	var Ctx = function(){
  		this.beginPath = function(){
  			console.log('path starting');
  		};
  		this.lineWidth = "";
  		this.strokeStyle = "";
  		this.currentPoints = [];
  		this.moveTo = function(x,y){
  			this.currentPoints.push({X:x,Y:y});
  		};
  		this.lineToPoints = []
  		this.stroke = function(){};
  		this.lineTo = function(x,y){
  			this.lineToPoints.push({X:x,Y:y});
  		};
  	};

  	it('should pass correct values to the canvas', function () {
  		var snake = new Snake.Snake(new Snake.Point(50,500));
 	 	snake.points.push({X:50,Y:600});
  		snake.points.push({X:50,Y:700});
  		var context = new Ctx()
  		snake.Draw(context);

  	// assert the snake will draw and pass the CTX a list of points
  		assert.equal(700, context.lineToPoints[2].Y);	
  	});


  	it('should set the properties of the ctx ', function () {
		var snake = new Snake.Snake(new Snake.Point(50,500));
 	 	snake.points.push({X:50,Y:600});
  		snake.points.push({X:50,Y:700});
  		var context = new Ctx()
  		snake.Draw(context);

  		assert.equal("green", context.strokeStyle);
  		assert.equal("5", context.lineWidth);  		
  	});


  });

});