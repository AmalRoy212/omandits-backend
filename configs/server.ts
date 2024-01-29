import cors from "cors";
import express, { Application, Request, Response } from "express";
import { connectToDatabase, getDatabase } from "./database";

class Server {
  constructor() {
    
    const app: Application = express();
    const port = process.env.PORT || 3000;
    app.use(express.json());
  }

  runServer(){
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
  }

}
