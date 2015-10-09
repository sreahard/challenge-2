var shape = require('./shape');

describe('Shape', function() {

  var square = new shape.Shape2d("square", "orange");
  var circle = new shape.Circle("circle", "blue", 3);
  var cube = new shape.Cube("cube", "purple", 3);


  it('The square should be orange', function() {
    expect(square.getColor()).toEqual('orange');
  });

  it('The circle should be blue', function() {
    expect(circle.getColor()).toEqual('blue');
  });

  it('What is the circles radius?', function(){
    expect(circle.getRadius()).toEqual(3);
  });

  it('What is the circles diameter? ', function(){
    expect(circle.getDiameter()).toEqual(6);
  });

  it('What is the circles area? ', function(){
    expect(circle.getArea()).toEqual(28.274333882308138);
  });

  it('circle is a 2D Shape', function() {
    expect(circle instanceof shape.Shape2d).toBe(true);
  });

  it('The cube should be purple', function() {
    expect(cube.getColor()).toEqual('purple');
  });

  it('What is the cubes volume?', function() {
    expect(cube.getVolume()).toEqual(27);
  });

  it('the cube should be a 3D Shape', function() {
    expect(cube instanceof shape.Shape3d).toBe(true);
  });

  it('the cube should be a Shape', function() {
    expect(cube instanceof shape.Shape).toBe(true);
  });

  it('the circle should not have volume', function() {
    expect(circle.getVolume).toBe(undefined);
  });

});