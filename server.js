// const fs = require("node:fs");
// const http = require("node:http");

// const indexServer = http.createServer((req, res) => {
//   let path;

//   switch (req.url) {
//     case "/":
//       path = "./index.html";
//       break;

//     case "/about":
//       path = "./about.html";
//       break;
//     case "/contact-me":
//       path = "./contact-me.html";
//       break;

//     default:
//       path = "./404.html";
//   }

//   fs.stat(path, (error, stats) => {
//     if (error) {
//       res.writeHead(404);
//       res.end("File not found");
//     } else {
//       res.writeHead(200, {
//         "Content-Type": "text/html",
//         "Content-Length": stats.size,
//       });

//       const fileStream = fs.createReadStream(path);
//       fileStream.pipe(res);
//       fileStream.on("Error", (error) => {
//         console.error("File Stream error: " + error);
//         res.statusCode(500);
//         res.end("Internal server error");
//       });
//     }
//   });
// });

// indexServer.listen(8080);
