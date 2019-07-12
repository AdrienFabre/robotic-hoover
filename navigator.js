let fs = require("fs");

class Navigator {
  constructor(inputFile) {
    this.content = fs.readFileSync(inputFile, "utf8").split("\n");
    this.directions = this.content[this.content.length - 1].split("");
    this.initialPosition = {
      X: parseInt(this.content[1][0]),
      Y: parseInt(this.content[1][2])
    };
    this.dirtPositions = this.content.splice(2, this.content.length - 3);
    this.positions = [];
  }

  executeDrivingInstructions() {
    let position = this.initialPosition;
    for (let i = 0; i < this.directions.length; i++) {
      this.updatePosition(position, this.directions[i]);
    }
  }

  updatePosition(position, direction) {
    switch (direction) {
      case "N":
        position.Y += 1;
        break;
      case "S":
        position.Y -= 1;
        break;
      case "E":
        position.X += 1;
        break;
      case "W":
        position.X -= 1;
        break;
    }
    this.positions.push(`${position.X} ${position.Y}`);
  }

  finalPosition() {
    return this.positions[this.positions.length - 1];
  }

  cleanedDirt() {
    let dirtCount = 0;
    for (let i = 0; i < this.dirtPositions.length; i++) {
      if (this.positions.includes(this.dirtPositions[i])) {
        dirtCount += 1;
      }
    }
    return dirtCount.toString();
  }
}

export default Navigator;
