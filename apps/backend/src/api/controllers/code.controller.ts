import DbInit from "../../infrastructure/database"
import {Request, Response} from 'express';

export const getProblemById = (req: Request, res: Response) => {
    const {id} = req.params;
    console.log({id});
    
    const result = DbInit.find((item: any) => item.id === id);
    res.status(200).json({data: result});
}

export const getAllProblems = (req: Request, res: Response) => {
    const result = DbInit.getAll();
    res.status(200).json({data: result});
}