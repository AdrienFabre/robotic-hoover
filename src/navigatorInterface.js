const Navigator = require("./navigator");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(
  `What is the path of your input file?
(file format details in the README)
`,
  path => {
    console.log("Here is your report:");
    let navigator = new Navigator(path);
    navigator.executeDrivingInstructions().outputReport();
    readline.close();
  }
);
