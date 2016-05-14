var Point = function(x,y){
    this.X = x;
    this.Y = y;
}

var Snake = function(cpoint){
    
    this.Length;
    this.points = [];
    if(typeof(cpoint) !== 'undefined' && cpoint !== null ){
        this.points[0] = cpoint;    
    };
    this.SetOrigin = function(point){
        if(typeof(point) == 'object'){
            this.points.push(point);        
        }    
    
    };
    
    
    this.GetCurrentPath = function(){
        return this.points;
    };
    
    this.Intersects = function(x,y){
        return true;
    };
    
    this.Draw = function(ctx){
        ctx.beginPath();
        ctx.lineWidth="5";
        ctx.strokeStyle="green";
        ctx.moveTo(this.points[0].X,this.points[0].Y);
        for(var i = 0; i < this.points.length; i++){
            ctx.lineTo(this.points[i].X,this.points[i].Y);
        };
        ctx.stroke();
    };
    
    this.CleanPath = function(speed,skip){
        var toSkip = 0;
        if(skip !== null && typeof(skip) !== 'undefined'){
                toSkip = skip;
            }
        for(var i=0; i< speed; i++){
            
            if(i >= toSkip){
                points.pop();    
            };
            var head = points[0];
            var directionX = points[0].X = points[1].X;
            var directionY = points[0].Y = points[1].Y;
            var newPoint = new Point(points[0].X + directionX, points[0].Y + directionY);
            points.push(newPoint);
        }
        
    };
    
    
};

if(typeof exports !== 'undefined') {
  exports.Snake = Snake;
}

if(typeof exports !== 'undefined') {
  exports.Point = Point;
}

