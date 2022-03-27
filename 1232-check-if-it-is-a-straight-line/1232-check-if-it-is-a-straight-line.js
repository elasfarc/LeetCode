var checkStraightLine = (coordinates) => {
  if (coordinates.length == 2) return true;
  var [p1, p2] = coordinates;
  var V1 = new Vector(p1, p2);
  var areAllPointsOnLine = true;
  for (point of coordinates.slice(2)) {
    var V2 = new Vector(p2, point);
    isPointOnLine = V1.isPointOn(V2);
    if (!isPointOnLine) {
      areAllPointsOnLine = false;
      break;
    }
    V1 = V2;
    p2 = point;
  }
  return areAllPointsOnLine;
};

//*******
function Vector([x1, y1], [x2, y2]) {
  this.x = x2 - x1;
  this.y = y2 - y1;
}

Vector.prototype.crossProduct = function (v2) {
  return this.x * v2.y - this.y * v2.x;
};
Vector.prototype.isPointOn = function (v2) {
  return this.crossProduct(v2) == 0;
};