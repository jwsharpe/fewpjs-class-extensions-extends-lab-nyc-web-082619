// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((sum, n) => sum + n);
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.sides.length === 3;
  }
}
class Square extends Polygon {
  get area() {
    return this.sides[0] * this.sides[1];
  }
  get isValid() {
    return this.sides.length === 4;
  }
}
