"use strict";
let app = require("./app");
const config = require("./config");
const port = config.Server.port;

//Starts server
let serverInstance = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


// Shuts server down when app exits
process.on("SIGINT", function () {
    serverInstance.close();
    console.log("Server turned off");
});