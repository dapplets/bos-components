const fs = require("fs");
const { getBosComponents, getMWebComponents } = require("./common/components");

const main = async () => {
  const bos = await getBosComponents();
  const mweb = await getMWebComponents();

  const json = JSON.stringify({ ...bos, mweb }, null, 2)
  fs.writeFileSync("./build/index.json", json);
};

main()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

