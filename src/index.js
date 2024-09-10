const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");

//Servidor express
const app = express();

//Servidor http
const httpServer = createServer(app);
const io = new Server(httpServer);

//Statics files
app.use(express.static(path.join(__dirname, "views")));

//Rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname, +"views/index.html");
});

io.on("connection", (socket) => {
  console.log(socket);
});

//Levantar el servidor
httpServer.listen(3000, console.log("Servidor levantado en el puerto: 3000"));
