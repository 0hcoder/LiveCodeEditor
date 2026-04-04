import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();
const httpServer = createServer();
const io = new Server(httpServer,{
    cors:{
        origin:"*"
    }
});
const yjs = new YSocketIO(io);
app.use(express.static("public"));

yjs.initialize();

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "ok",
    sucsess: true,
  });
});

httpServer.listen("3000", () => console.log("listen on port 3000"));
