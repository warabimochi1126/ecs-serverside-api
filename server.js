const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/test" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: `API:testにアクセスされました。乱数: ${Math.floor(Math.random() * 1000)}`,
      }),
    );
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`サーバー起動中: http://localhost:${PORT}`);
});
