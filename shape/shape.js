exports.Shape = function(name) {
	this.name = name;
	this.getName = function (){
		return name;
	}
}

exports.Shape2d = function(name, color){
	exports.Shape.call(this, name);
	this.color = color;
	this.getColor = function (){
		return color;
	}
}
exports.Shape2d.prototype = Object.create(exports.Shape.prototype);
exports.Shape2d.prototype.constructor = exports.Shape;

exports.Circle = function(name, color, radius, diameter){
	exports.Shape2d.call(this, name, color);
	this.radius = radius;
	this.getRadius = function (){
		return radius;
	}
	this.getDiameter = function (){
		return radius * 2;
	}
	this.getArea = function () {
		return Math.PI * (radius * radius);
	}
}
exports.Circle.prototype = Object.create(exports.Shape2d.prototype);
exports.Circle.prototype.constructor = exports.Shape2d;

exports.Shape3d = function(name, color, radius){
	exports.Circle.call(this, name, color, radius)
	
	
}
exports.Shape3d.prototype = Object.create(exports.Circle.prototype);
exports.Shape3d.prototype.constructor = exports.Circle;

exports.Cube = function(name, color, radius){
	exports.Shape3d.call(this, name, color, radius);
	this.getVolume = function () {
		return (radius * radius) * radius;	
	}

}

exports.Cube.prototype = Object.create(exports.Shape3d.prototype);
exports.Cube.prototype.constructor = exports.Shape3d;

//Voodoo Magic to make Cube inherit from Shape3d
