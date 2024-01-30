import express from "express";
import Server from '../configs/server';
import env from 'dotenv';

const app = express();
env.config();

const server = new Server(process.env.PORT || 3000, app);
server.runServer();
