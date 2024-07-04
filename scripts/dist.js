const fs = require("fs");
const { getMWebComponents } = require("./common/mweb-components");
const { getBosComponents } = require("./common/bos-components");

const BuildOutputPath = "./build/index.json";

const main = async () => {
  const [bos, mweb] = await Promise.all([
    getBosComponents(),
    getMWebComponents(),
  ]);

  const json = JSON.stringify({ ...bos, mweb }, null, 2);
  fs.writeFileSync(BuildOutputPath, json);
};

main()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
