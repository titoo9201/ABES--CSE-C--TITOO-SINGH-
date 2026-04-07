const http = require("http");

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  // POST request handle
  if (req.method === "POST" && req.url === "/data") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Received Data:", body);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Data received successfully",
          data: JSON.parse(body),
        })
      );
    });
  } else {
    res.writeHead(404);
    res.end("Route not found");
  }
});

// Server start
server.listen(3000, () => {
  console.log("Server running on port 3000");
});