const { exec } = require("child_process");
const { getReplacementsPath } = require("./replacements");

const getBosComponents = async (accountId, networkId) => {
  const replacementsPath = getReplacementsPath(networkId);

  const controller = new AbortController();
  const { signal } = controller;

  exec(`bos-loader ${accountId} -p ./src/widgets --port 3031 -r ${replacementsPath}`, { signal });

  return fetch("http://localhost:3031")
    .then((res) => res.json())
    .finally(() => controller.abort());
};

module.exports = { getBosComponents };
