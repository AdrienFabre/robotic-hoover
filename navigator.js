import { directive } from "@babel/types";

let fs = require("fs");

class Navigator {
  constructor(inputFile) {
    this.content = fs.readFileSync(inputFile, "utf8").split("\n");
    this.directions = this.content[this.content.length - 1].split("");
    this.initialPosition = {
      X: parseInt(this.content[1][0]),
      Y: parseInt(this.content[1][2])
    };
  }
  finalPosition() {
    let position = this.initialPosition;
    this.directions.forEach(function(direction) {
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
    });
    return `${position.X} ${position.Y}`;
  }
}

export default Navigator;
