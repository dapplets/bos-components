const { createServer } = require("node:http");
const { getAllComponents } = require("./common/components");

const hostname = "127.0.0.1";
const port = 3031;

const server = createServer(async (req, res) => {
  const components = await getAllComponents();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(components));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on("SIGINT", () => {
  server.close();
});
