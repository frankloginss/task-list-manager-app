const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = 4443;

const serverOptions = {
        // Certificate(s) & Key(s)
        cert: fs.readFileSync(path.join(__dirname, 'certs/host.crt')),
        key: fs.readFileSync(path.join(__dirname, 'certs/host.key')),

        // TLS Versions
        maxVersion: 'TLSv1.3',
        minVersion: 'TLSv1.2'
}

app.use(express.static(path.join(__dirname, '/taskmgr-app/build')));

const server = require('https').Server(serverOptions, app);


// Start the Server
server.listen(PORT, () => {
    console.log(`[-] Server Listening on Port ${PORT}`);
});
