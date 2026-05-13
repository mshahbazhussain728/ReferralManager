// src/socket.js
import { io } from "socket.io-client";

const socket = io("http://localhost:5173", {
  auth: {
    token: localStorage.getItem("accessToken"),
  },
  autoConnect: false,   // we connect manually
});

export default socket;