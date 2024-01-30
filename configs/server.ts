import cors from "cors";
import express, { Application } from "express";
import { connectToDatabase } from "./database";
import nocache from 'nocache'
import env from 'dotenv'
import delegateRoute from "../src/routes/DelegateRoute"

class Server {
  private app: Application;
  private port: number;

  constructor( port: any, app: express.Application) {
    this.app = app;
    this.port = port;
    connectToDatabase()
    
    this.intializeMiddlewares()
    this.initialiseRoutes();
  }

  private intializeMiddlewares() : void {
    this.app.use(nocache()) 
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private initialiseRoutes():void{
    this.app.use('/delegate',delegateRoute)
  }

  public runServer() : void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default Server