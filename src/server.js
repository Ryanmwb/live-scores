const app = require("./app");
const http = require("http");
const server = http.createServer(app);
const port = normalizePort(process.env.PORT || "3000")
app.set("port", port);

/*app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html',
require('ejs').renderFile);*/

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

server.on("listening", () => {
    console.log(`server is listening for requests on port ${server.address().port}`);
});