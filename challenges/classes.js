// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1 {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class CubeMaker1 extends CuboidMaker1 {
  constructor(attr) {
    super(attr);
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 6 * (this.length * this.length);
  }
}

const cuboid1 = new CuboidMaker1({
  length: 4,
  width: 5,
  height: 5
});

const cube1 = new CubeMaker1({
  length: 3,
  width: 3,
  height: 3
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
