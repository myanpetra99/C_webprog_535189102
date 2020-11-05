const routeResponseMap = {
    "/home": "<h1>Info Page</h1>",
    "/cart": "<h1>Barang belanjaan</h1>",
    "/history": "<h1>My transaction.</h1>",
    "/dashboard": "<h1>Statistics of this month</h1>",
    "/product/item/asdasdasdas": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
        } else {
            res.end("<h1>Welcome!</h1>");
        }

    });

    app.listen(port);

console.log(`The server has started and is listening on port number:? ${port}`);

