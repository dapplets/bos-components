const fs = require("fs");
const { getReplacements } = require("./replacements");

const ProjectId = "dapplets.near";

/**
 * Serializes values in an object with keys containing $
 * Example: { "a": "a", "$b": { "bb": "bb" }} => { "a": "a", "b": "{\"bb\": \"bb\"}" }
 */
const serializeValues = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (key.startsWith("$")) {
      return {
        ...acc,
        [key.slice(1)]: JSON.stringify(obj[key]),
      };
    } else {
      return {
        ...acc,
        [key]:
          typeof obj[key] === "object" ? serializeValues(obj[key]) : obj[key],
      };
    }
  }, {});
};

function getSpecificMWebComponents(path, replacements) {
  const filenames = fs.readdirSync(path);
  const componentsMap = {};

  for (const filename of filenames) {
    if (fs.lstatSync(path + "/" + filename).isDirectory()) {
      continue;
    }

    if (!filename.endsWith(".json")) {
      continue;
    }

    let json = fs.readFileSync(path + "/" + filename, "utf8");

    for (const [key, value] of Object.entries(replacements)) {
      // should replace ${key} with value everywhere in the string
      json = json.replace(new RegExp(`\\$\\{${key}\\}`, "g"), value);
    }

    componentsMap[filename.slice(0, -5)] = serializeValues(JSON.parse(json));
  }

  return componentsMap;
}

const getMWebComponents = async (accountId, networkId) => {
  const replacements = {
    ...getReplacements(networkId),
    REPL_ACCOUNT: accountId,
  };

  const app = getSpecificMWebComponents("./src/apps", replacements);
  const mutation = getSpecificMWebComponents("./src/mutations", replacements);
  const parser = getSpecificMWebComponents("./src/parsers", replacements);

  return {
    [accountId]: { settings: { [ProjectId]: { app, mutation, parser } } },
  };
};

module.exports = { getMWebComponents };
