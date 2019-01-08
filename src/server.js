const app = require("./app");
const http = require("http");
const server = http.createServer(app);
app.set("port", port);
const port = normalizePort(process.env.PORT || "3000")

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
}

server.listen(port);
