const express = require("express"),
    http = require("http"),
    port = 3000,
    app = require("express")(),
    server = http.createServer(app),
    bodyParser = require("body-parser"),
    routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.all("/*", function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,X-Access-Token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});

routes(app);

console.log("app running");
console.log("Server started");
server.listen(port, () => console.log('Listening on port ' + port));
