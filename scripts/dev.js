const { createServer } = require("node:http");
const { getBosComponents, getMWebComponents } = require("./common/components");

const hostname = "127.0.0.1";
const port = 3030;

const server = createServer(async (req, res) => {
  const bos = await getBosComponents();
  const mweb = await getMWebComponents();

  res.statusCode = 200;
  
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  res.end(JSON.stringify({ ...bos, mweb }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on("SIGINT", () => {
  server.close();
});
