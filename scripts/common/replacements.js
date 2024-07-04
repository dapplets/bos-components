const fs = require("fs");
const path = require("path");

const getReplacementsPath = (networkId) =>
  path.join(__dirname, `../../replacements.${networkId}.json`);

const getReplacements = (networkId) => {
  const absolutePath = getReplacementsPath(networkId);
  return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
};

module.exports = { getReplacements, getReplacementsPath };
