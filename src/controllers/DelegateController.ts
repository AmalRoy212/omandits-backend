import { Request, Response } from "express";
import AddDelegateUseCase from "../useCase/AddDelegateUseCase";

class DelegateController {
    constructor(private readonly addDelegateUseCase: AddDelegateUseCase) {}

    async postNewDelegate(req: Request, res: Response): Promise<void> {
        const {
            name,
            lastName,
            email,
            jobTitle,
            companyName,
            phone,
            industry,
            numOfEmployees,
            lookingFor,
            role,
            country,
            type,
            budget,
            timing,
            refName,
            refCompanyName,
            refJobTitle,
            refEmail,
            refPhone
        } = req.body;

        try {
            const newDelegate = await this.addDelegateUseCase.execute({
                name,
                lastName,
                email,
                jobTitle,
                companyName,
                phone,
                industry,
                numOfEmployees,
                lookingFor,
                role,
                country,
                type,
                budget,
                timing,
            });

            if( refName && refCompanyName && refJobTitle && refEmail && refPhone ){

            }

            res.status(201).json({ message : 'Submitted succesfully' }); // Assuming you want to send the created delegate as a JSON response

        } catch (error) {
            console.error(error); // Log the error for debugging purposes
            res.status(500).json({ error: "Unexpected server error" }); // Send an appropriate error response
        }
    }

    async getAllDelegates() : Promise<any>{
        try {
            
        } catch (error) {
            throw new Error(`Cannot get all delegates at the moment ${error}`)
        }
    }
}

export default DelegateController;
