let fs = require("fs");

class Navigator {
  constructor(inputFile) {
    this.content = fs.readFileSync(inputFile, "utf8").split("\n");

    this.roomSize = {
      X: parseInt(this.content[0][0]),
      Y: parseInt(this.content[0][2])
    };

    this.initialPosition = {
      X: parseInt(this.content[1][0]),
      Y: parseInt(this.content[1][2])
    };
    this.dirtPositions = this.content.splice(2, this.content.length - 3);

    this.directions = this.content[this.content.length - 1].split("");

    this.positions = [];
  }

  executeDrivingInstructions() {
    let position = this.initialPosition;
    for (let i = 0; i < this.directions.length; i++) {
      this.updatePosition(position, this.directions[i]);
    }
    return this;
  }

  updatePosition(position, direction) {
    if (direction === "N" && position.Y < this.roomSize.Y) {
      position.Y += 1;
    } else if (direction === "S" && position.Y > 0) {
      position.Y -= 1;
    } else if (direction === "E" && position.X < this.roomSize.X) {
      position.X += 1;
    } else if (direction === "W" && position.X > 0) {
      position.X -= 1;
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

  outputReport() {
    console.log(`${this.finalPosition()}\n${this.cleanedDirt()}`);
  }
}

module.exports = Navigator;
