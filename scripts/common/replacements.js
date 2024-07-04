const fs = require("fs");
const path = require("path");

const getReplacementsPath = (networkId) =>
  `../../replacements.${networkId}.json`;

const getReplacements = (networkId) => {
  const absolutePath = path.join(__dirname, getReplacementsPath(networkId));
  return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
};

module.exports = { getReplacements, getReplacementsPath };
