import express, { Application }  from "express";
import Server from '../configs/server';
import env from 'dotenv';

const app : Application = express();
env.config();


const server = new Server(  process.env.PORT || 3000 ,app );
server.runServer()

