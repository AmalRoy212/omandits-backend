import express, { Application, Request, Response, Router } from "express";


const delegateRouter : Router = express.Router()


// delegates route 

delegateRouter.route('/new').post()



export default delegateRouter