import express, { Application } from "express";
import { connectToDatabase, getDatabase } from "./database";
import nocache from 'nocache';
import cors from "cors";
import delegateRoute from "../src/routes/DelegateRoute";
import DelegateRoute from "../src/routes/DelegateRoute";

class Server {
  private app: Application;
  private port: number;
  private db : any

  constructor(private readonly portNumber: any, private readonly application: express.Application) {
    this.app = application;
    this.port = portNumber;
    
    // Move database connection setup to the beginning
    this.intializeMiddlewares();
    // connectToDatabase();
     // Ensure database connection is established before proceeding
    // this.db = getDatabase()
    // this.initialiseRoutesMiddleware();
    this.setup()
  }

  private intializeMiddlewares(): void {
    this.app.use(nocache());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private async setup(): Promise<void> {
    await connectToDatabase();
    
    // Instantiate DelegateRoute and pass the Db instance
    const delegateRoute = new DelegateRoute(this.db);

    // Use the delegateRouter in your app
    this.app.use("/delegates", delegateRoute.getRouter());

    // Add more middleware or routes as needed
    // ...

    // Start the server
    this.startServer();
}

private startServer(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

  public runServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }

  // private initialiseRoutesMiddleware(): void {
  //   this.app.use('/delegate', delegateRoute);
  // }
}

export default Server;
