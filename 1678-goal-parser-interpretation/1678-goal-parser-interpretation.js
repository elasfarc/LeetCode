/**
 * @param {string} command
 * @return {string}
 */

var interpret = function (command, parsed = "") {
  let i = 0;
  while (i < command.length) {
      
    let char = command[i];
    switch (char) {
      case "G":
        parsed += "G";
        i += 1;
        break;
      case "(":
        parsed += command[i + 1] == ")" ? "o" : "al";
        i += command[i + 1] == ")" ? 2 : 4;
        break;
    }
  }
  return parsed;
};