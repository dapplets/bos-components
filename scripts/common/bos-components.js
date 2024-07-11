const { exec } = require("child_process");
const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");
const { getReplacements, executeReplacements } = require("./replacements");

const InputWidgetsPath = path.join(__dirname, "../../src/widgets");

const getComponentsInDirectory = (directory) => {
  const subpaths = fs.readdirSync(directory);

  let components = {};

  for (const subpath of subpaths) {
    const absoluteSubPath = path.join(directory, subpath);
    if (fs.lstatSync(absoluteSubPath).isDirectory()) {
      const childComponents = getComponentsInDirectory(absoluteSubPath);
      for (const key in childComponents) {
        components[`${subpath}.${key}`] = childComponents[key];
      }
      continue;
    }

    if (!subpath.endsWith(".jsx")) {
      continue;
    }

    const widgetId = subpath.replace(".jsx", "");

    components[widgetId] = {
      code: fs.readFileSync(absoluteSubPath, "utf8"),
    };
  }

  return components;
};

const getBosComponents = async (accountId, networkId) => {
  const replacementsPath = {
    ...getReplacements(networkId),
    REPL_ACCOUNT: accountId,
  };

  const componentsByWidgetId = getComponentsInDirectory(InputWidgetsPath);

  const components = Object.fromEntries(
    Object.entries(componentsByWidgetId).map(([widgetId, widget]) => [
      `${accountId}/widget/${widgetId}`,
      { code: executeReplacements(widget.code, replacementsPath) },
    ])
  );

  return { components };
};

module.exports = { getBosComponents };
