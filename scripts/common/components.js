const fs = require("fs");
const { exec } = require("child_process");

const [accountId] = process.argv.slice(2);

const controller = new AbortController();
const { signal } = controller;
exec(`bos-loader ${accountId} -p ./src/widgets --port 3031`, { signal });

const getBosComponents = () => {
  return fetch("http://localhost:3031").then((res) => res.json());
};

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

function getSpecificMWebComponents(path) {
  const filenames = fs.readdirSync(path);
  const componentsMap = {};

  for (const filename of filenames) {
    if (fs.lstatSync(path + "/" + filename).isDirectory()) {
      continue;
    }

    if (!filename.endsWith(".json")) {
      continue;
    }

    const json = fs.readFileSync(path + "/" + filename, "utf8");
    componentsMap[filename.slice(0, -5)] = serializeValues(
      JSON.parse(json.replace(/\${REPL_ACCOUNT}/g, accountId))
    );
  }

  return componentsMap;
}

const getMWebComponents = async () => {
  const app = getSpecificMWebComponents("./src/apps");
  const mutation = getSpecificMWebComponents("./src/mutations");
  const parser = getSpecificMWebComponents("./src/parsers");

  return {
    [accountId]: { settings: { "dapplets.near": { app, mutation, parser } } },
  };
};

process.on("SIGINT", () => {
  controller.abort();
});

module.exports = { getMWebComponents, getBosComponents };
