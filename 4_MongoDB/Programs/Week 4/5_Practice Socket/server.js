// No need to change the pre-written code
// Implement the features in io.on() section
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

export const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Connection made.");

    // Write your code here
    socket.on("join", ({ username, room }) => {
        // Join the specified room
        socket.join(room);

        // Send a welcome message to the user
        socket.emit("message", `Welcome ${username} to the room: ${room}`);

        // Notify others in the room that a user has joined
        socket.to(room).emit("message", `${username} has joined the chat`);

        console.log(`${username} joined room: ${room}`);
    });

    // Handle 'sendMessage' event
    socket.on("sendMessage", ({ message, room, username }) => {
        // Broadcast the message to everyone in the room
        io.to(room).emit("message", `${username}: ${message}`);
    });
    socket.on("disconnect", () => {
        console.log("Connection disconnected.");
    });
});

