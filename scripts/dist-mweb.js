const fs = require("fs");
const { getMWebComponents } = require("./common/components");

const main = async () => {
  const mweb = await getMWebComponents();
  fs.writeFileSync("./build/mweb.json", JSON.stringify(mweb, null, 2));
};

main()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

