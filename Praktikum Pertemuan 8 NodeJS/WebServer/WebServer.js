const localHost = '127.0.0.1';
const port = 8000,

    http = require("http"),

    httpStatus = require("http-status-codes"),

    app = http.createServer((request, response) => {
        console.log("Received an incoming request!");

        response.writeHead(httpStatus.OK, { "Content-Type": "text/html" });

        let responseMessage = "<h1>Web server saya Pertama</h1>";

        response.write(responseMessage);

        response.end();

        console.log(`hasil res server : ${responseMessage}`);
    });

app.listen(port);

console.log(`Menggunakan localhost: https://${localHost}:${port}`);
