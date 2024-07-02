const fs = require("fs");
const { getBosComponents } = require("./common/components");

const main = async () => {
  const bos = await getBosComponents();
  fs.writeFileSync("./build/bos.json", JSON.stringify(bos, null, 2));
};

main()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

