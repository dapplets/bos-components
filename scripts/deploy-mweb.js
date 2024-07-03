const { connect } = require("./common/social-db");
const { getMWebComponents } = require("./common/components");

const [accountId, networkId] = process.argv.slice(2);

const ProjectId = "dapplets.near";

const main = async () => {
  const data = await getMWebComponents();
  const socialDb = connect(networkId, accountId);

  for (const accountId in data) {
    const { app, mutation, parser } = data[accountId].settings[ProjectId];

    for (const appId in app) {
      console.log(`Deploying ${accountId}/app/${appId}`);
      await socialDb.set({
        [accountId]: {
          settings: { [ProjectId]: { app: { [appId]: app[appId] } } },
        },
      });
    }

    for (const mutationId in mutation) {
      console.log(`Deploying ${accountId}/mutation/${mutationId}`);
      await socialDb.set({
        [accountId]: {
          settings: { [ProjectId]: { mutation: { [mutationId]: mutation[mutationId] } } },
        },
      });
    }

    for (const parserId in parser) {
      console.log(`Deploying ${accountId}/parser/${parserId}`);
      await socialDb.set({
        [accountId]: {
          settings: { [ProjectId]: { parser: { [parserId]: parser[parserId] } } },
        },
      });
    }
  }

  console.log("Done!");
};

main()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
