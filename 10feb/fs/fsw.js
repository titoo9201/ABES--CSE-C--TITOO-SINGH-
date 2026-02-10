const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome! Use /write or /append");
    }


    else if (req.url === "/write") {

        fs.writeFile("demo.txt", "Hello! File created and written.\n", (err) => {
            if (err) {
                res.end("Error writing file");
            } else {
                res.end("File Created & Written Successfully!");
            }
        });
    }

    else if (req.url === "/append") {

        fs.appendFile("demo.txt", "This is appended text.\n", (err) => {
            if (err) {
                res.end("Error appending file");
            } else {
                res.end( "data Appended Successfully!");
            }
        });
    }


    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(" Server is running on port", port);
});
