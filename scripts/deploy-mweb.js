const { connect } = require("./common/social-db");
const { getMWebComponents } = require("./common/components");

const [accountId, networkId] = process.argv.slice(2);

const main = async () => {
  const data = await getMWebComponents();
  const socialDb = connect(networkId, accountId);

  await socialDb.set(data)

  console.log('Done!');
};

main()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
