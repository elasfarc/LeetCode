/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.availSlots = { big, medium, small };
};
/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  carType = carType == 1 ? "big" : carType == 2 ? "medium" : "small";
  if (this.availSlots[carType] > 0) {
    this.availSlots[carType] -= 1;
    return true;
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
